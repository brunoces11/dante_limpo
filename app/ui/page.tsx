"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/header";
import Assinatura from "@/components/assinatura";

// Lista manual dos componentes encontrados na pasta components/ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

// Dynamically import components that might have SSR issues
const DynamicCalendar = dynamic(() => import("@/components/ui/calendar").then(mod => ({ default: mod.Calendar })), { ssr: false });
const DynamicDialog = dynamic(() => import("@/components/ui/dialog").then(mod => ({ default: mod.Dialog })), { ssr: false });
const DynamicDialogTrigger = dynamic(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogTrigger })), { ssr: false });
const DynamicDialogContent = dynamic(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogContent })), { ssr: false });
const DynamicDialogHeader = dynamic(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogHeader })), { ssr: false });
const DynamicDialogTitle = dynamic(() => import("@/components/ui/dialog").then(mod => ({ default: mod.DialogTitle })), { ssr: false });
const DynamicSheet = dynamic(() => import("@/components/ui/sheet").then(mod => ({ default: mod.Sheet })), { ssr: false });
const DynamicSheetTrigger = dynamic(() => import("@/components/ui/sheet").then(mod => ({ default: mod.SheetTrigger })), { ssr: false });
const DynamicSheetContent = dynamic(() => import("@/components/ui/sheet").then(mod => ({ default: mod.SheetContent })), { ssr: false });
const DynamicDrawer = dynamic(() => import("@/components/ui/drawer").then(mod => ({ default: mod.Drawer })), { ssr: false });
const DynamicDrawerTrigger = dynamic(() => import("@/components/ui/drawer").then(mod => ({ default: mod.DrawerTrigger })), { ssr: false });
const DynamicDrawerContent = dynamic(() => import("@/components/ui/drawer").then(mod => ({ default: mod.DrawerContent })), { ssr: false });

export default function UIShowcasePage() {
  return (
    <TooltipProvider>
      <Header />
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">DANTE | UI Components</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Button */}
          <Card>
            <CardHeader>Button</CardHeader>
            <CardContent>
              <Button>Default</Button>
              <Button variant="outline" className="ml-2">Outline</Button>
              <Button variant="destructive" className="ml-2">Destructive</Button>
            </CardContent>
          </Card>
          {/* Input */}
          <Card>
            <CardHeader>Input</CardHeader>
            <CardContent>
              <Input placeholder="Digite algo..." />
            </CardContent>
          </Card>
          {/* Badge */}
          <Card>
            <CardHeader>Badge</CardHeader>
            <CardContent>
              <Badge>Badge padrão</Badge>
            </CardContent>
          </Card>
          {/* Tabs */}
          <Card>
            <CardHeader>Tabs</CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Conteúdo da Tab 1</TabsContent>
                <TabsContent value="tab2">Conteúdo da Tab 2</TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          {/* Switch */}
          <Card>
            <CardHeader>Switch</CardHeader>
            <CardContent>
              <Switch />
            </CardContent>
          </Card>
          {/* Checkbox */}
          <Card>
            <CardHeader>Checkbox</CardHeader>
            <CardContent>
              <Checkbox />
            </CardContent>
          </Card>
          {/* RadioGroup */}
          <Card>
            <CardHeader>Radio Group</CardHeader>
            <CardContent>
              <RadioGroup defaultValue="1">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="r1" />
                    <label htmlFor="r1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Opção 1
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="r2" />
                    <label htmlFor="r2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Opção 2
                    </label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          {/* Select */}
          <Card>
            <CardHeader>Select</CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          {/* Slider */}
          <Card>
            <CardHeader>Slider</CardHeader>
            <CardContent>
              <Slider defaultValue={[50]} max={100} step={1} className="w-40" />
            </CardContent>
          </Card>
          {/* Progress */}
          <Card>
            <CardHeader>Progress</CardHeader>
            <CardContent>
              <Progress value={60} className="w-40" />
            </CardContent>
          </Card>
          {/* Accordion */}
          <Card>
            <CardHeader>Accordion</CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Item 1</AccordionTrigger>
                  <AccordionContent>Conteúdo do item 1</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          {/* Alert */}
          <Card>
            <CardHeader>Alert</CardHeader>
            <CardContent>
              <Alert>
                <AlertTitle>Alerta!</AlertTitle>
                <AlertDescription>Este é um alerta de exemplo.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          {/* Avatar */}
          <Card>
            <CardHeader>Avatar</CardHeader>
            <CardContent>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
          {/* Breadcrumb */}
          <Card>
            <CardHeader>Breadcrumb</CardHeader>
            <CardContent>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">UI</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </CardContent>
          </Card>
          {/* Calendar */}
          <Card>
            <CardHeader>Calendar</CardHeader>
            <CardContent>
              <DynamicCalendar mode="single" selected={new Date()} onSelect={() => {}} />
            </CardContent>
          </Card>
          {/* Dialog */}
          <Card>
            <CardHeader>Dialog</CardHeader>
            <CardContent>
              <DynamicDialog>
                <DynamicDialogTrigger asChild>
                  <Button>Abrir Dialog</Button>
                </DynamicDialogTrigger>
                <DynamicDialogContent>
                  <DynamicDialogHeader>
                    <DynamicDialogTitle>Exemplo de Dialog</DynamicDialogTitle>
                  </DynamicDialogHeader>
                  Conteúdo do Dialog
                </DynamicDialogContent>
              </DynamicDialog>
            </CardContent>
          </Card>
          {/* Popover */}
          <Card>
            <CardHeader>Popover</CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Mostrar Popover</Button>
                </PopoverTrigger>
                <PopoverContent>Conteúdo do Popover</PopoverContent>
              </Popover>
            </CardContent>
          </Card>
          {/* Tooltip */}
          <Card>
            <CardHeader>Tooltip</CardHeader>
            <CardContent>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip de exemplo</TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>
          {/* Sheet */}
          <Card>
            <CardHeader>Sheet</CardHeader>
            <CardContent>
              <DynamicSheet>
                <DynamicSheetTrigger asChild>
                  <Button>Abrir Sheet</Button>
                </DynamicSheetTrigger>
                <DynamicSheetContent>Conteúdo do Sheet</DynamicSheetContent>
              </DynamicSheet>
            </CardContent>
          </Card>
          {/* Drawer */}
          <Card>
            <CardHeader>Drawer</CardHeader>
            <CardContent>
              <DynamicDrawer>
                <DynamicDrawerTrigger asChild>
                  <Button>Abrir Drawer</Button>
                </DynamicDrawerTrigger>
                <DynamicDrawerContent>Conteúdo do Drawer</DynamicDrawerContent>
              </DynamicDrawer>
            </CardContent>
          </Card>
          {/* Table */}
          <Card>
            <CardHeader>Table</CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>João</TableCell>
                    <TableCell>joao@email.com</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          {/* Skeleton */}
          <Card>
            <CardHeader>Skeleton</CardHeader>
            <CardContent>
              <Skeleton className="h-6 w-32" />
            </CardContent>
          </Card>
          {/* Pagination */}
          <Card>
            <CardHeader>Pagination</CardHeader>
            <CardContent>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>
        </div>
      </main>
      <Assinatura />
    </TooltipProvider>
  );
} 