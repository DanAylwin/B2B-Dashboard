'use client'

import { useState } from 'react'
import { Bell, ChevronDown, Menu, Plus, Search, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function ContractorDashboard() {
  // ... (existing state and mock data)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      {/* ... (existing sidebar code) */}

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        {/* ... (existing header code) */}

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Live Worker Map */}
            {/* ... (existing Live Worker Map code) */}

            {/* Company Compliance Status */}
            <Card>
              <CardHeader>
                <CardTitle>Company Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.client}</p>
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </div>
                      <Progress value={item.percentage} className="w-1/3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Worker Compliance Status */}
            <Card>
              <CardHeader>
                <CardTitle>Worker Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Worker</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {workerComplianceData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.worker}</TableCell>
                        <TableCell>{item.client}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === 'Compliant' ? 'default' : item.status === 'Pending' ? 'secondary' : 'destructive'}>
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Upcoming Work Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Work Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingWOs.map((wo, index) => (
                    <div key={index} className="border-b pb-2 last:border-b-0">
                      <p className="text-sm font-medium">{wo.id} - {wo.client}</p>
                      <p className="text-xs text-muted-foreground">Location: {wo.location}</p>
                      <p className="text-xs text-muted-foreground">Workers: {wo.workers.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outstanding Requests */}
            <Card>
              <CardHeader>
                <CardTitle>Outstanding Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {outstandingRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{request.type} for {request.client}</p>
                        <p className="text-xs text-muted-foreground">Due: {request.dueDate}</p>
                      </div>
                      <Button size="sm">Complete</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* New Job Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle>New Job Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newJobs.map((job, index) => (
                    <div key={index} className="border-b pb-2 last:border-b-0">
                      <p className="text-sm font-medium">{job.client}</p>
                      <p className="text-xs text-muted-foreground">{job.description}</p>
                      <p className="text-xs text-muted-foreground">Budget: {job.budget}</p>
                      <Button size="sm" className="mt-2">
                        <Plus className="mr-2 h-4 w-4" /> Apply
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
