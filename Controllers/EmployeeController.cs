using LCVacation;
using Microsoft.AspNetCore.Mvc;

namespace LCVacation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;
        private readonly Dictionary<int, Employee> _employeeList;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;

            _employeeList = new Dictionary<int, Employee>()
            {
                {1, new HourlyEmployee(){Name = "Julie Kitchen", DaysWorked = 34, VacationDays = 0f, Id = 1} },
                {2, new HourlyEmployee() {Name = "Edgar Wright", DaysWorked = 124, VacationDays = 1.3f, Id = 2} },
                {3, new HourlyEmployee() { Name = "Sam Whitworth", DaysWorked = 230, VacationDays = 3.4f, Id = 3 } },
                {4, new HourlyEmployee() {Name = "Alan Grant", DaysWorked = 90, VacationDays = 1.0f, Id = 4} },
                {5, new HourlyEmployee() {Name = "Alex Bering", DaysWorked = 124, VacationDays = 2.4f, Id = 5} },
                {6, new HourlyEmployee() {Name = "Jane Goodal", DaysWorked=245, VacationDays=4.6f, Id = 6}},
                {7, new HourlyEmployee() {Name = "Mark Hamil", DaysWorked=145, VacationDays=4.6f, Id = 7}},
                {8, new HourlyEmployee() {Name = "Henry Jones", DaysWorked=45, VacationDays=7.6f, Id = 8} } ,
                {9, new HourlyEmployee() {Name = "President Business", DaysWorked=95, VacationDays=8.6f, Id = 9}},
                {10, new HourlyEmployee() {Name = "Tim Cook", DaysWorked=111, VacationDays=5.7f, Id = 10}}
            };
        }

        [HttpGet]
        public Employee[] Get()
        {
            return _employeeList.Values.ToArray();
        }

        [HttpPost] 
        public Employee[] Work(int days, int id)
        {
            Employee updatingEmployee = _employeeList[id];
            ((IEmployee)updatingEmployee).Work(days);

            return _employeeList.Values.ToArray();
        }

        [HttpPost]
        public Employee[] TakeVacation(int days, int id)
        {
            Employee updatingEmployee = _employeeList[id];
            ((IEmployee)updatingEmployee).TakeVacation(days);

            return _employeeList.Values.ToArray();
        }
    }
}