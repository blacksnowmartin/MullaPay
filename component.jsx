/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yN1OH0dr7N6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <WalletIcon className="h-6 w-6" />
          <span className="text-lg">MullaPay</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width={32}
                  height={32}
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <BellIcon className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Account Balance</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">$5,329.00</div>
                <div className="text-sm text-muted-foreground">0x1234567890abcdef</div>
              </div>
              <Button variant="outline" size="icon">
                <CopyIcon className="h-5 w-5" />
                <span className="sr-only">Copy address</span>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-accent p-2 text-accent-foreground">
                      <ArrowUpIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Sent to 0x9876...</div>
                      <div className="text-sm text-muted-foreground">June 23, 2023</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-500">-$250.00</div>
                    <div className="text-sm text-muted-foreground">KSH</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 p-2 text-green-50">
                      <ArrowDownIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">Received from 0x5678...</div>
                      <div className="text-sm text-muted-foreground">June 20, 2023</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-500">+$100.00</div>
                    <div className="text-sm text-muted-foreground">KSH</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between">
                <Link href="#" className="text-sm text-blue-600 underline" prefetch={false}>
                  View all transactions
                </Link>
                <Button variant="outline" size="sm">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-accent p-4 text-accent-foreground hover:bg-accent/90"
                prefetch={false}
              >
                <div>
                  <div className="font-medium">Send KSH</div>
                  <div className="text-sm text-muted-foreground">Transfer to crypto wallet</div>
                </div>
                <ArrowUpIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-accent p-4 text-accent-foreground hover:bg-accent/90"
                prefetch={false}
              >
                <div>
                  <div className="font-medium">Receive KSH</div>
                  <div className="text-sm text-muted-foreground">Get paid in crypto</div>
                </div>
                <ArrowDownIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-accent p-4 text-accent-foreground hover:bg-accent/90"
                prefetch={false}
              >
                <div>
                  <div className="font-medium">P2P Transfer</div>
                  <div className="text-sm text-muted-foreground">Send KSH to other users</div>
                </div>
                <UsersIcon className="h-6 w-6" />
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>View your recent cryptocurrency transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>June 23, 2023</TableCell>
                    <TableCell>Sent</TableCell>
                    <TableCell className="text-red-500">-$250.00</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Completed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>June 20, 2023</TableCell>
                    <TableCell>Received</TableCell>
                    <TableCell className="text-green-500">+$100.00</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Completed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>June 15, 2023</TableCell>
                    <TableCell>Sent</TableCell>
                    <TableCell className="text-red-500">-$75.00</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>June 10, 2023</TableCell>
                    <TableCell>Received</TableCell>
                    <TableCell className="text-green-500">+$50.00</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Completed</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-sm text-blue-600 underline" prefetch={false}>
                View all transactions
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-50 rounded-full bg-background shadow-lg sm:hidden"
          >
            <PlusIcon className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="sm:hidden">
          <nav className="grid gap-4 p-4">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <WalletIcon className="h-6 w-6" />
              <span>Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <ArrowUpIcon className="h-5 w-5" />
              <span>Send</span>
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <ArrowDownIcon className="h-5 w-5" />
              <span>Receive</span>
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <UsersIcon className="h-5 w-5" />
              <span>P2P</span>
            </Link>
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
