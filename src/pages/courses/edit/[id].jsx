/*import AddNewCourseForm from "@/components/Courses/AddNewCourseForm";*/
import EditCourseForm from "../../../components/Courses/EditCourseForm";
import DashboardLayout from '../../layouts/DashboardLayout';
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <EditCourseForm />
    </DashboardLayout>
  );
}