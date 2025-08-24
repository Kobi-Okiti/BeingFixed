import buildingImg from "../assets/images/building.png";
import WaitlistForm from "@/components/WaitListForm";

export default function Home() {
  return (
    <div className="bg-[#EDF6FF] h-full w-full text-black pt-[52px] pb-[115px]">
      <div className="w-full px-[123px] flex flex-row items-start gap-[52.66px]">
        <div className="flex-1">
          <p className="text-[60px] font-medium leading-tight">
            Be the First to Fix Apartment Issues{" "}
            <span className="text-[#005EFF]">Faster</span>
          </p>
          <p className="text-[15px] text-[#000000B2] w-[376px] mt-[12px] leading-tight">
            Join the Beingfixed waitlist today and get early access to
            hassle-free apartment maintenance.
          </p>
          <WaitlistForm style="mt-[28px]" />
          <p className="text-xs text-[#00000080] mt-[12px]">
            No spam. You can unsubscribe anytime.
          </p>
          <div className="w-full flex flex-row items-center gap-[29px] mt-[28px]">
            <div className="flex flex-row items-center gap-[5px]">
              <i className="tick-icon size-[24px] text-[#00A63E]" />
              <p className="text-xs text-[#00000080]">
                Free for first 100 users
              </p>
            </div>
            <div className="flex flex-row items-center gap-[5px]">
              <i className="tick-icon size-[24px] text-[#00A63E]" />
              <p className="text-xs text-[#00000080]">
                No credit card required
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[552px] h-[401px] bg-white p-[16px] flex flex-col justify-between gap-[16px] rounded-[8px] shadow-md transition-transform duration-300 
     hover:scale-125 hover:shadow-xl"
        >
          <div className="overflow-hidden w-full h-max">
            <img
              src={buildingImg}
              alt="App logo"
              className="w-full h-[353px] rounded-[8px] transition-transform duration-300 ease-in-out hover:scale-125 "
            />
          </div>
          <div className="w-fit flex flex-row items-center gap-[5px] text-[#000000] text-xs font-light">
            <span className="size-[6px] rounded-full bg-[#FF0000]"></span>
            Maintenance request submitted...
          </div>
        </div>
      </div>

      <div className="w-[65.76%] mx-auto mt-[105px] flex flex-col items-center gap-[20px]">
        <p className="text-[#000000] text-[26px]">
          Current apartment maintenance is{" "}
          <span className="text-[#F00707]">broken</span>
        </p>
        <p className="text-center text-[#4A5565] w-[60.61%] text-[15px] leading-tight">
          Property managers, landlord, and tenants are all struggling with
          outdated systems that create more problems than they solve.
        </p>
        <div className="w-full flex flex-row min-h-[152px] justify-between gap-[10px]">
          <div className="w-[352px] h-full flex flex-col items-center justify-between gap-[7px]">
            <span className="!size-[40px] rounded-full bg-[#FEF2F2] flex items-center justify-center">
              <i className="time-icon size-[20px] text-[#FF0000]" />
            </span>
            <span className="h-[36px] flex items-center justify-center text-[14px] text-[#000000]">
              Slow Communication
            </span>
            <span className="h-[62px] flex items-center justify-center p-[10px] text-[12px] text-[#4A5565] text-center leading-tight">
              Maintenance requests get lost in email chains and phone calls,
              leading to delayed responses and frustrated tenants
            </span>
          </div>
          <div className="w-[352px] h-full flex flex-col items-center justify-between gap-[7px]">
            <span className="!size-[40px] rounded-full bg-[#FEF2F2] flex items-center justify-center">
              <i className="cancel-icon size-[20px] text-[#FF0000]" />
            </span>
            <span className="h-[36px] flex items-center justify-center text-[14px] text-[#000000]">
              Lost Requests
            </span>
            <span className="h-[62px] flex items-center justify-center p-[10px] text-[12px] text-[#4A5565] text-center leading-tight">
              Paper forms and scattered digital messages mean important issues
              fall through the cracks
            </span>
          </div>
          <div className="w-[352px] h-full flex flex-col items-center justify-between gap-[7px]">
            <span className="!size-[40px] rounded-full bg-[#FEF2F2] flex items-center justify-center">
              <i className="warning-icon size-[20px] text-[#FF0000]" />
            </span>
            <span className="h-[36px] flex items-center justify-center text-[14px] text-[#000000]">
              Frustrated Tenants
            </span>
            <span className="h-[62px] flex items-center justify-center p-[10px] text-[12px] text-[#4A5565] text-center leading-tight">
              Lack of transparency and poor communication creates tension
              between tenants and property management
            </span>
          </div>
        </div>
      </div>

      <div className="w-[61.73%] mx-auto mt-[105px] flex flex-col items-center gap-[20px]">
        <p className="text-[#000000] text-[26px] leading-none">
          Simple as <span className="text-[#005EFF]"> 1-2-3</span>
        </p>
        <p className="text-center text-[#000000B2] text-[15px]">
          Beingfixed streamlines the entire maintenance process, making it
          effortless for everyone involved.
        </p>
        <div className="w-full flex flex-row h-[152px] justify-between gap-[10px]">
          <div className="w-[256px] h-[216px] flex flex-col items-center justify-evenly px-[15.5px] bg-white rounded-[8px]">
            <i className="report-img size-[40px]" />
            <p className="text-[14px] text-[#000000] font-medium">Report</p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Tenants easily submit maintenance requests with photos and
              descriptions through the app.
            </p>
          </div>
          <div className="w-[256px] h-[216px] flex flex-col items-center justify-evenly px-[15.5px] bg-white rounded-[8px]">
            <i className="route-img size-[40px]" />
            <p className="text-[14px] text-[#000000] font-medium">Route</p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Requests are automatically routed to the right person with all the
              context they need.
            </p>
          </div>
          <div className="w-[256px] h-[216px] flex flex-col items-center justify-evenly px-[15.5px] bg-white rounded-[8px]">
            <i className="resolve-img size-[40px]" />
            <p className="text-[14px] text-[#000000] font-medium">Resolve</p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Track progress in real-time and get notifications when issues are
              completed.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[55.41%] mx-auto mt-[159px] flex flex-col items-center gap-[20px]">
        <p className="text-[#000000] text-[26px] leading-tight">
          Everything you need
        </p>
        <p className="text-center text-[#000000B2] text-[15px]">
          Simple tools that make apartment maintenance fast, transparent, and
          stress-free.
        </p>
        <div className="w-full flex flex-row h-[152px] justify-between">
          <div className="w-[162px] h-[104px] flex flex-col items-center justify-evenly">
            <i className="camera-icon w-[19px] h-[18px] text-[#005EFF] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">
              Photo & Video Uploads
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Capture the issue with photos and videos to ensure faster, more
              accurate repairs.
            </p>
          </div>
          <div className="w-[162px] h-[104px] flex flex-col items-center justify-evenly">
            <i className="bell-icon w-[18px] h-[20px] text-[#005EFF] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">
              Real-time Updates
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Get instant notifications when your request is received, assigned
              and completed.
            </p>
          </div>
          <div className="w-[162px] h-[104px] flex flex-col items-center justify-evenly">
            <i className="dashboard-icon w-[24px] h-[23px] text-[#005EFF] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">
              Management Dashboard
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Track all requests, monitor response times and keep your
              properties running smoothly.
            </p>
          </div>
          <div className="w-[162px] h-[104px] flex flex-col items-center justify-evenly">
            <i className="chat-icon w-[20px] h-[20px] text-[#005EFF] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">
              Vendor Chat
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Direct communication between tenants, managers and repair
              professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[282px] bg-white mt-[77px] flex flex-col items-center justify-center gap-[11px]">
        <p className="text-black text-[26px] leading-none">
          Be the First to Fix Apartment Issues Faster
        </p>
        <p className="text-[15px] texxt-[#4A5565] h-[38px]">
          Join the Beingfixed waitlist today and get early access to hassle-free
          apartment maintenance
        </p>
        <WaitlistForm buttonColor="#008027" />
      </div>

      <div className="w-[82.36%] mx-auto mt-[91px] flex flex-col items-center gap-[25px]">
        <p className="text-[#000000] text-[26px] font-medium leading-tight">
          Who it’s for
        </p>
        <p className="text-center text-[#4A5565] text-[15px]">
          Beingfixed works for everyone in the apartment maintenance ecosystem
        </p>
        <div className="w-full flex flex-row h-[152px] justify-between gap-[10px]">
          <div className="w-[237px] min-h-[152px] flex flex-col items-center justify-evenly">
            <i className="home-img size-[40px] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">Landlords</p>
            <p className="text-[12px] px-[21px] py-[10px] font-light text-[#4A5565] text-center leading-tight">
              Keep tenants happy and properties well-maintained with clear
              communication and fast fixes.
            </p>
          </div>
          <div className="w-[237px] min-h-[152px] flex flex-col items-center justify-evenly">
            <i className="tenant-img size-[40px] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">Tenants</p>
            <p className="text-[12px] px-[21px] py-[10px] font-light text-[#4A5565] text-center leading-tight">
              Report issues easily and track progress with real-time updates and
              photo uploads.
            </p>
          </div>
          <div className="w-[237px] min-h-[152px] flex flex-col items-center justify-evenly">
            <i className="property-img size-[40px] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">
              Property Managers
            </p>
            <p className="text-[12px] px-[21px] py-[10px] font-light text-[#4A5565] text-center leading-tight">
              Manage multiple properties efficiently with centralized dashboards
              and automated workflows.
            </p>
          </div>
          <div className="w-[237px] min-h-[152px] flex flex-col items-center justify-evenly">
            <i className="fix-img size-[40px] shrink-0" />
            <p className="text-[14px] text-[#000000] text-center">Vendors</p>
            <p className="text-[12px] px-[21px] py-[10px] font-light text-[#4A5565] text-center leading-tight">
              Get clear job details, communicate directly and build stronger
              client relationships.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[73.19%] mx-auto mt-[64px] flex flex-col items-center gap-[20px]">
        <p className="text-[#000000] text-[26px] leading-none">
          <span className="text-[#008027]"> Fair pricing </span>that grows with
          you
        </p>
        <p className="text-center text-[#000000B2] leading-none text-[15px]">
          We’re building a sustainable platform that creates value for everyone
          in the maintenance ecosystem.
        </p>
        <div className="w-full flex flex-row h-[152px] justify-between gap-[10px]">
          <div className="w-[308px] h-[216px] flex flex-col items-center justify-evenly px-[37px] bg-white rounded-[8px]">
            <i className="tick-img size-[40px]" />
            <p className="text-[14px] text-[#000000] font-medium text-center">
              Monthly Subscription for Managers
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Tenants easily submit maintenance requests with photos and
              descriptions through the app.
            </p>
          </div>
          <div className="w-[308px] h-[216px] flex flex-col items-center justify-evenly px-[37px] bg-white rounded-[8px]">
            <i className="analytics-img size-[40px]" />
            <p className="text-[14px] text-[#000000] font-medium text-center">
              Premium Analytics
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Advanced insights and reporting for data-driven maintenance
              decisions
            </p>
          </div>
          <div className="w-[308px] h-[216px] flex flex-col items-center justify-evenly px-[37px] bg-white rounded-[8px]">
            <i className="shield-img size-[40px]" />
            <p className="text-[14px] text-[#000000] font-medium text-center">
              Vendor Marketplace
            </p>
            <p className="text-[12px] font-light text-[#4A5565] text-center leading-tight">
              Connect with pre-vetted contractors and service providers in your
              area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
