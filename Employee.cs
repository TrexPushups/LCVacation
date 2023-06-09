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
        public string ErrorMesssage { get; set; }
        //this is to communicate to the UI how many days are left for validation purposes.
        public int MaxWorkDays { get; set; }

        public Employee()
        {
            setMaxWorkDays(0);
        }

        public Employee TakeVacation(float days)
        {
            ErrorMesssage = "";
            if (VacationDays >= days) {
                VacationDays -= days;
            }
            else
            {ErrorMesssage ="Cannot use more days than you have"; }
            return this;
        }

        public Employee Work(int days)
        {
            ErrorMesssage = "";
            if (DaysWorked + days <= max_daysWorked)
            {
                DaysWorked += days;
                VacationDays += VacationLimit * days / max_daysWorked;

                setMaxWorkDays(days);
            }
            else
            { ErrorMesssage ="Cannot Work more days than 260 total"; }

            
            return this;
        }

        protected void setMaxWorkDays(int days) { MaxWorkDays = max_daysWorked - DaysWorked; }
    }
}
