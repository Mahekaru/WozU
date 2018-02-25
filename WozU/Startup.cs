using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WozU.Startup))]
namespace WozU
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
