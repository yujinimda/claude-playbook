---
name: react-ui-patterns
description: Modern React UI patterns for loading states, error handling, and data fetching. Use when building UI components, handling async data, or managing UI states.
---

# React UI Patterns

## Core Principles

1. **Never show stale UI** — 데이터가 있으면 로딩 스피너를 표시하지 않는다
2. **Always surface errors** — 사용자는 실패를 반드시 알아야 한다
3. **Optimistic updates** — UI를 즉각적으로 느끼게 한다
4. **Progressive disclosure** — 콘텐츠가 준비되는 대로 표시한다
5. **Graceful degradation** — 부분 데이터가 데이터 없음보다 낫다

## Loading State Patterns

### The Golden Rule

> "데이터가 없을 때만 로딩 인디케이터를 표시하라."

**Correct:**
```typescript
function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (error) return <ErrorBanner error={error} />;
  if (isLoading && !data) return <ProfileSkeleton />;

  return <Profile user={data!} />;
}
```

**Anti-pattern (깜빡임 유발):**
```typescript
// 캐시 데이터가 있어도 스피너를 표시함
if (isLoading) return <Spinner />;
```

### Skeleton vs Spinner

| 사용 | Skeleton | Spinner |
|------|----------|---------|
| 알려진 레이아웃 (리스트, 카드) | ✅ | ❌ |
| 초기 페이지 로드 | ✅ | ❌ |
| 모달, 버튼 제출 | ❌ | ✅ |
| 형태를 알 수 없는 콘텐츠 | ❌ | ✅ |

**Skeleton 예시:**
```typescript
function ProfileSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-12 w-12 rounded-full bg-gray-200" />
      <div className="mt-2 h-4 w-32 rounded bg-gray-200" />
      <div className="mt-1 h-3 w-48 rounded bg-gray-200" />
    </div>
  );
}
```

## Error Handling Patterns

### The Error Handling Hierarchy

```
1. Inline error     → 필드 단위 검증 (폼 입력)
2. Toast            → 복구 가능한 에러 (네트워크 재시도)
3. Error Banner     → 페이지 레벨 에러, 데이터 부분 사용 가능
4. Full Error Screen → 복구 불가능한 에러
```

### Never Swallow Errors

```typescript
// ❌ 절대 하지 말 것
try {
  await submitForm(data);
} catch (error) {
  console.error(error); // 사용자는 실패를 모름
}

// ✅ 항상 사용자에게 알림
try {
  await submitForm(data);
  toast.success('저장되었습니다.');
} catch (error) {
  toast.error('저장에 실패했습니다. 다시 시도해 주세요.');
  console.error(error);
}
```

### Error Banner Component

```typescript
interface ErrorBannerProps {
  error: Error;
  onRetry?: () => void;
  title?: string;
}

function ErrorBanner({ error, onRetry, title = '오류가 발생했습니다' }: ErrorBannerProps) {
  return (
    <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-4">
      <p className="font-medium text-red-800">{title}</p>
      <p className="mt-1 text-sm text-red-600">{error.message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 text-sm font-medium text-red-700 underline hover:text-red-900"
        >
          다시 시도
        </button>
      )}
    </div>
  );
}
```

## Button State Patterns

**Critical:** 비동기 작업 중에는 항상 버튼을 비활성화하라.

```typescript
function SubmitButton({ onSubmit }: { onSubmit: () => Promise<void> }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSubmitting}           // ← 중복 요청 방지
      className="btn-primary"
    >
      {isSubmitting ? (
        <>
          <Spinner className="mr-2 h-4 w-4" />
          처리 중...
        </>
      ) : (
        '제출'
      )}
    </button>
  );
}
```

## Empty States

모든 컬렉션에는 명시적인 빈 상태(empty state)가 필요하다.

```typescript
function UserList({ users }: { users: User[] }) {
  if (users.length === 0) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <UsersIcon className="h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">사용자 없음</h3>
        <p className="mt-1 text-sm text-gray-500">새 사용자를 추가해 시작하세요.</p>
      </div>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
```

## Form Submission Pattern

```typescript
function ContactForm() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: submitContact,
    onSuccess: () => toast.success('전송되었습니다.'),
    onError: (err) => toast.error(err.message),
  });

  const { handleSubmit, register, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))}>
      <input {...register('email')} />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      {error && <ErrorBanner error={error} />}

      <SubmitButton isPending={isPending} />
    </form>
  );
}
```

## Anti-Patterns

| Anti-pattern | 올바른 접근 |
|-------------|------------|
| 캐시 데이터가 있는데 스피너 표시 | `isLoading && !data` 조건 사용 |
| 에러를 묵인 (`catch {}`) | 항상 toast/banner로 사용자에게 알림 |
| 비동기 중 버튼 활성화 | `disabled={isPending}` |
| 빈 상태 없는 리스트 | 모든 컬렉션에 empty state 추가 |
| mutation에 onError 없음 | 반드시 에러 핸들러 구현 |

## Checklist

- [ ] 에러 상태가 사용자에게 표시됨
- [ ] 데이터 없을 때만 로딩 인디케이터 표시
- [ ] 컬렉션에 빈 상태 제공
- [ ] 비동기 작업 중 버튼 비활성화
- [ ] mutation 에러 핸들러 구현
- [ ] 모든 사용자 액션에 피드백 제공

## Integration

다음 스킬과 함께 사용:
- `react-errors-boundaries` — Error Boundary 연동
- `zustand-state-management` — 글로벌 에러 상태
- `react-impl-testing` — 로딩/에러 상태 테스트
