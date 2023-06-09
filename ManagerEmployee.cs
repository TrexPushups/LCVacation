﻿namespace LCVacation
{
    public class ManagerEmployee : Employee, IEmployee
    {
        private const int MaxVacationDays = 30;
        public const int min_workdays = 0;
        public const int max_workdays = 260;

        public ManagerEmployee()
        {
            Name = string.Empty;
            Id = 0;
            EmployeeType = "Manager";
            VacationDays = 0;
            DaysWorked = 0;
        }


        public Employee TakeVacation(float days)
        {
            VacationDays -= days;
            return this;
        }

        public Employee Work(int days)
        {
            DaysWorked += days;
            VacationDays += MaxVacationDays * days / max_workdays;
            return this;
        }
    }
}
