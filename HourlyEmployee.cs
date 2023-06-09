namespace LCVacation
{
    public class HourlyEmployee : Employee, IEmployee
    {
        public HourlyEmployee(): base()
        {
            Name = string.Empty;
            Id = 0;
            EmployeeType = "Hourly";
            DaysWorked = 0;
            VacationDays = 0;
            VacationLimit = 10;
        }

    }
}
