import EditStudent from "@/components/Students/EditStudent";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <EditStudent />
    </DashboardLayout>
  );
}