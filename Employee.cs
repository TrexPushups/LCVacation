using System.ComponentModel.DataAnnotations;

namespace LCVacation
{
    public class Employee
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? EmployeeType { get; set; }
        [Range(0, 260)]
        public float VacationDays { get; set; }
        [Range(0, 260)]
        public int DaysWorked { get; set; }

    }
}
