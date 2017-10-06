using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRWebApi.Hubs;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;

namespace SignalRWebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly IHubContext<ProgressHub> _progressHub;

        public ValuesController(IHubContext<ProgressHub> progressHub)
        {
            _progressHub = progressHub;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/values
        [HttpPost]
        public async Task Post(string clientId)
        {
            for(int i = 1; i <= 10; ++i)
            {
                await Task.Delay(500);
                await _progressHub.Clients.Client(clientId).InvokeAsync("sendProgress", new { message = $"Message {i}", percent = i * 10 });
            }
        }
    }
}
