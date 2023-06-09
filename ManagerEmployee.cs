namespace LCVacation
{
    public class ManagerEmployee : Employee, IEmployee
    {
        public ManagerEmployee(): base()
        {
            Name = string.Empty;
            Id = 0;
            EmployeeType = "Manager";
            DaysWorked = 0;
            VacationLimit = 30;
            VacationDays = 0;
        }


    }
}
