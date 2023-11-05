import AddNewTeacher from "../../../components/Teachers/AddNewTeacher";
import DashboardLayout from '../../layouts/DashboardLayout';
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <AddNewTeacher />
    </DashboardLayout>
  );
}