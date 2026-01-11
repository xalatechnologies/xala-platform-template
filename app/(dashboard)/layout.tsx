import { ApplicationShell } from '@xalatechnologies/platform/ui';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = [
    {
      id: 'dashboard',
      label: 'Oversikt',
      href: '/dashboard',
      icon: '📊',
    },
    {
      id: 'users',
      label: 'Brukere',
      href: '/dashboard/users',
      icon: '👥',
    },
    {
      id: 'settings',
      label: 'Innstillinger',
      href: '/dashboard/settings',
      icon: '⚙️',
    },
  ];

  const user = {
    name: 'Ola Nordmann',
    email: 'ola@eksempel.no',
    avatar: 'https://ui-avatars.com/api/?name=Ola+Nordmann&background=random',
  };

  return (
    <ApplicationShell
      appName="Min App"
      navigation={navigation}
      user={user}
    >
      {children}
    </ApplicationShell>
  );
}
