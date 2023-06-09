namespace LCVacation
{
    public class SalariedEmployee : Employee, IEmployee
    {
        public SalariedEmployee(): base()
        {
            Name = string.Empty;
            Id = 0;
            EmployeeType = "Salaried";
            DaysWorked = 0;
            VacationDays = 0;
            VacationLimit = 15;

        }

    }
}
