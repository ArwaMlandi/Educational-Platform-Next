
import EditTeacher from "../../../components/Teachers/EditTeacher";
import DashboardLayout from '../../layouts/DashboardLayout';
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <EditTeacher />
    </DashboardLayout>
  );
}