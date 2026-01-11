import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Text,
  Badge,
  Button,
} from '@xalatechnologies/platform/ui';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Aktive Brukere',
      value: '1,234',
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Total Inntekt',
      value: 'NOK 89,012',
      change: '+23%',
      changeType: 'positive' as const,
    },
    {
      title: 'Konverteringsrate',
      value: '3.2%',
      change: '-2%',
      changeType: 'negative' as const,
    },
    {
      title: 'Support Tickets',
      value: '45',
      change: '0%',
      changeType: 'neutral' as const,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Kari Nordmann',
      action: 'opprettet ny konto',
      time: '2 minutter siden',
    },
    {
      id: 2,
      user: 'Per Hansen',
      action: 'oppgraderte til Pro',
      time: '5 minutter siden',
    },
    {
      id: 3,
      user: 'Svensen AS',
      action: 'la til 5 nye brukere',
      time: '12 minutter siden',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Text muted>Velkommen tilbake! Her er en oversikt over din applikasjon.</Text>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <Badge
                  variant={
                    stat.changeType === 'positive'
                      ? 'success'
                      : stat.changeType === 'negative'
                      ? 'destructive'
                      : 'secondary'
                  }
                >
                  {stat.change} fra sist måned
                </Badge>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Nylig Aktivitet</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-sm text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Hurtige Handlinger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start">
              ➕ Legg til ny bruker
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📊 Se rapporter
            </Button>
            <Button variant="outline" className="w-full justify-start">
              ⚙️ Innstillinger
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📧 Send invitasjon
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
