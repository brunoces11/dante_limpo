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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

// Dynamically import components that might have SSR issues
const DynamicCalendar = dynamic(() => import("@/components/ui/calendar").then(mod => ({ default: mod.Calendar })), { ssr: false });
const DynamicTabs = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.Tabs })), { ssr: false });
const DynamicTabsList = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.TabsList })), { ssr: false });
const DynamicTabsTrigger = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.TabsTrigger })), { ssr: false });
const DynamicTabsContent = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.TabsContent })), { ssr: false });
const DynamicSwitch = dynamic(() => import("@/components/ui/switch").then(mod => ({ default: mod.Switch })), { ssr: false });
const DynamicCheckbox = dynamic(() => import("@/components/ui/checkbox").then(mod => ({ default: mod.Checkbox })), { ssr: false });
const DynamicRadioGroup = dynamic(() => import("@/components/ui/radio-group").then(mod => ({ default: mod.RadioGroup })), { ssr: false });
const DynamicRadioGroupItem = dynamic(() => import("@/components/ui/radio-group").then(mod => ({ default: mod.RadioGroupItem })), { ssr: false });
const DynamicSelect = dynamic(() => import("@/components/ui/select").then(mod => ({ default: mod.Select })), { ssr: false });
const DynamicSelectTrigger = dynamic(() => import("@/components/ui/select").then(mod => ({ default: mod.SelectTrigger })), { ssr: false });
const DynamicSelectValue = dynamic(() => import("@/components/ui/select").then(mod => ({ default: mod.SelectValue })), { ssr: false });
const DynamicSelectContent = dynamic(() => import("@/components/ui/select").then(mod => ({ default: mod.SelectContent })), { ssr: false });
const DynamicSelectItem = dynamic(() => import("@/components/ui/select").then(mod => ({ default: mod.SelectItem })), { ssr: false });
const DynamicSlider = dynamic(() => import("@/components/ui/slider").then(mod => ({ default: mod.Slider })), { ssr: false });
const DynamicProgress = dynamic(() => import("@/components/ui/progress").then(mod => ({ default: mod.Progress })), { ssr: false });
const DynamicAccordion = dynamic(() => import("@/components/ui/accordion").then(mod => ({ default: mod.Accordion })), { ssr: false });
const DynamicAccordionItem = dynamic(() => import("@/components/ui/accordion").then(mod => ({ default: mod.AccordionItem })), { ssr: false });
const DynamicAccordionTrigger = dynamic(() => import("@/components/ui/accordion").then(mod => ({ default: mod.AccordionTrigger })), { ssr: false });
const DynamicAccordionContent = dynamic(() => import("@/components/ui/accordion").then(mod => ({ default: mod.AccordionContent })), { ssr: false });
const DynamicPopover = dynamic(() => import("@/components/ui/popover").then(mod => ({ default: mod.Popover })), { ssr: false });
const DynamicPopoverTrigger = dynamic(() => import("@/components/ui/popover").then(mod => ({ default: mod.PopoverTrigger })), { ssr: false });
const DynamicPopoverContent = dynamic(() => import("@/components/ui/popover").then(mod => ({ default: mod.PopoverContent })), { ssr: false });
const DynamicTooltip = dynamic(() => import("@/components/ui/tooltip").then(mod => ({ default: mod.Tooltip })), { ssr: false });
const DynamicTooltipTrigger = dynamic(() => import("@/components/ui/tooltip").then(mod => ({ default: mod.TooltipTrigger })), { ssr: false });
const DynamicTooltipContent = dynamic(() => import("@/components/ui/tooltip").then(mod => ({ default: mod.TooltipContent })), { ssr: false });
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
              <DynamicTabs defaultValue="tab1">
                <DynamicTabsList>
                  <DynamicTabsTrigger value="tab1">Tab 1</DynamicTabsTrigger>
                  <DynamicTabsTrigger value="tab2">Tab 2</DynamicTabsTrigger>
                </DynamicTabsList>
                <DynamicTabsContent value="tab1">Conteúdo da Tab 1</DynamicTabsContent>
                <DynamicTabsContent value="tab2">Conteúdo da Tab 2</DynamicTabsContent>
              </DynamicTabs>
            </CardContent>
          </Card>
          {/* Switch */}
          <Card>
            <CardHeader>Switch</CardHeader>
            <CardContent>
              <DynamicSwitch />
            </CardContent>
          </Card>
          {/* Checkbox */}
          <Card>
            <CardHeader>Checkbox</CardHeader>
            <CardContent>
              <DynamicCheckbox />
            </CardContent>
          </Card>
          {/* RadioGroup */}
          <Card>
            <CardHeader>Radio Group</CardHeader>
            <CardContent>
              <DynamicRadioGroup defaultValue="1">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <DynamicRadioGroupItem value="1" id="r1" />
                    <label htmlFor="r1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Opção 1
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DynamicRadioGroupItem value="2" id="r2" />
                    <label htmlFor="r2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Opção 2
                    </label>
                  </div>
                </div>
              </DynamicRadioGroup>
            </CardContent>
          </Card>
          {/* Select */}
          <Card>
            <CardHeader>Select</CardHeader>
            <CardContent>
              <DynamicSelect>
                <DynamicSelectTrigger className="w-[180px]">
                  <DynamicSelectValue placeholder="Selecione" />
                </DynamicSelectTrigger>
                <DynamicSelectContent>
                  <DynamicSelectItem value="a">A</DynamicSelectItem>
                  <DynamicSelectItem value="b">B</DynamicSelectItem>
                </DynamicSelectContent>
              </DynamicSelect>
            </CardContent>
          </Card>
          {/* Slider */}
          <Card>
            <CardHeader>Slider</CardHeader>
            <CardContent>
              <DynamicSlider defaultValue={[50]} max={100} step={1} className="w-40" />
            </CardContent>
          </Card>
          {/* Progress */}
          <Card>
            <CardHeader>Progress</CardHeader>
            <CardContent>
              <DynamicProgress value={60} className="w-40" />
            </CardContent>
          </Card>
          {/* Accordion */}
          <Card>
            <CardHeader>Accordion</CardHeader>
            <CardContent>
              <DynamicAccordion type="single" collapsible>
                <DynamicAccordionItem value="item-1">
                  <DynamicAccordionTrigger>Item 1</DynamicAccordionTrigger>
                  <DynamicAccordionContent>Conteúdo do item 1</DynamicAccordionContent>
                </DynamicAccordionItem>
              </DynamicAccordion>
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
              <DynamicPopover>
                <DynamicPopoverTrigger asChild>
                  <Button>Mostrar Popover</Button>
                </DynamicPopoverTrigger>
                <DynamicPopoverContent>Conteúdo do Popover</DynamicPopoverContent>
              </DynamicPopover>
            </CardContent>
          </Card>
          {/* Tooltip */}
          <Card>
            <CardHeader>Tooltip</CardHeader>
            <CardContent>
              <DynamicTooltip>
                <DynamicTooltipTrigger asChild>
                  <Button>Hover me</Button>
                </DynamicTooltipTrigger>
                <DynamicTooltipContent>Tooltip de exemplo</DynamicTooltipContent>
              </DynamicTooltip>
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