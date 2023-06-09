using System.ComponentModel.DataAnnotations;

namespace LCVacation
{
    public class Employee
    {
        const int max_daysWorked = 260;
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? EmployeeType { get; set; }
        [Range(0, 260)]
        public float VacationDays { get; set; }
        [Range(0, 260)]
        public int DaysWorked { get; set; }
        public float VacationLimit { get; set; }

        //this is to communicate to the UI how many days are left for validation purposes.
        public float MaxVacationDays { get;  set; }
        //this is to communicate to the UI how many days are left for validation purposes.
        public int MaxWorkDays { get; set; }

        public Employee()
        {
            setMaxVacationDays(0);
            setMaxWorkDays(0);
        }

        public Employee TakeVacation(float days)
        {
            VacationDays -= days;
            setMaxVacationDays(days);
            return this;
        }

        public Employee Work(int days)
        {
            DaysWorked += days;
            VacationDays += VacationLimit * days / max_daysWorked;
            setMaxWorkDays(days);
            setMaxVacationDays(0);
            return this;
        }

        protected void setMaxWorkDays(int days) { MaxWorkDays = max_daysWorked - DaysWorked; }
        protected void setMaxVacationDays(float days) { MaxVacationDays = VacationDays - days; }
    }
}
