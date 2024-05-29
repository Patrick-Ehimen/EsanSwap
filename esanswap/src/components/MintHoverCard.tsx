import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "../../constants/icons";
import {
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

export function MintHoverCard() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex text-[18px] ml-4 cursor-pointer hover:text-gray-300 font-medium text-inherit">
          Minting
          <div className="m-1">{icons.chevron}</div>
        </div>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="autoscaling"
          description="Earn FTR rewards by staking assets for market making"
          startContent={icons.scale}
        >
          <Link href="/">Liquidity Minting</Link>
        </DropdownItem>
        <DropdownItem
          key="usage_metrics"
          description="Successfully complete a trade to get a FTR airdrop."
          startContent={icons.activity}
        >
          <Link href="/">Trading Minting</Link>
        </DropdownItem>
        <DropdownItem
          key="production_ready"
          description="Mint vFTR to earn more DoDo, vFTR to earn more DoDo"
          startContent={icons.flash}
        >
          <Link href="/">vFTR</Link>
        </DropdownItem>
        <DropdownItem
          key="99_uptime"
          description="Stake FTR to earn more FTR, Stake and earn more %APY"
          startContent={icons.server}
        >
          <Link href="/pages/stake">Staking</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
