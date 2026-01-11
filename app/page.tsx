import Link from 'next/link';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Text,
} from '@xalatechnologies/platform/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Velkommen til Xala Platform
            </h1>
            <Text size="lg" className="text-muted-foreground max-w-2xl mx-auto">
              En komplett startmal for å bygge SaaS-applikasjoner med Xala Platform SDK. 
              Inneholder alt du trenger for å komme i gang på minutter.
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Kom i gang
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Les dokumentasjonen
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🎨 UI Komponenter</CardTitle>
              </CardHeader>
              <CardContent>
                <Text muted>
                  95+ tilgjengelige komponenter med design tokens, 
                  tilgjengelighet og mørk modus klar.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🔐 Autentisering</CardTitle>
              </CardHeader>
              <CardContent>
                <Text muted>
                  BankID, ID-porten og Vipps integrasjoner klare til bruk. 
                  Multi-tenancy og RBAC inkludert.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🚀 Production Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <Text muted>
                  CI/CD, testing, deployment og alle beste praksiser 
                  allerede konfigurert.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
