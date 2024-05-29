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

export function DeveloperHoverCard() {
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
        <div className="flex text-[18px] ml-3 cursor-pointer hover:text-gray-300 font-medium text-inherit">
          Developer
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
          description="Create your own tokens with one click. No coding required!"
          startContent={icons.lock}
        >
          <Link href="/">Create a Token</Link>
        </DropdownItem>
        <DropdownItem
          key="usage_metrics"
          description="Create liquidity markets for free and customize your market making strategies"
          startContent={icons.user}
        >
          <Link href="/">Create a pool</Link>
        </DropdownItem>
        <DropdownItem
          key="production_ready"
          description="Stake FTR to earn more FTR to earn more DoDo"
          startContent={icons.flash}
        >
          <Link href="/pages/liquidity">Liquidity</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
