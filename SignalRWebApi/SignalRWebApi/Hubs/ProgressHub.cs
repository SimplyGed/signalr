using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalRWebApi.Hubs
{
    public class ProgressHub : Hub
    {
        public Task<string> Register()
        {
            return Task.FromResult(this.Context.ConnectionId);
        }
    }
}
