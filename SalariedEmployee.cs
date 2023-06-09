namespace LCVacation
{
    public class SalariedEmployee : Employee, IEmployee
    {
        private const int MaxVacationDays = 15;
        public const int min_workdays = 0;
        public const int max_workdays = 260;
        public SalariedEmployee()
        {
            Name = string.Empty;
            Id = 0;
            EmployeeType = "Salaried";
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
