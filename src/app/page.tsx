import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            이현기
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            프론트엔드 개발자 · 경력 5년
          </p>
          <a
            href="mailto:gusrldlqslek@gmail.com"
            className="mt-4 inline-block text-primary underline-offset-4 hover:underline"
          >
            gusrldlqslek@gmail.com
          </a>
        </header>

        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>소개</CardTitle>
              <CardDescription>프론트엔드 개발자 이현기입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                5년간 웹 프론트엔드 개발 경력을 보유하고 있으며, 사용자 경험과
                유지보수성을 고려한 개발을 지향합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>직무</CardTitle>
              <CardDescription>담당 역할</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-foreground">프론트엔드 개발자</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>경력</CardTitle>
              <CardDescription>총 경력</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-foreground">5년</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>연락처</CardTitle>
              <CardDescription>이메일</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:gusrldlqslek@gmail.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                gusrldlqslek@gmail.com
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
