import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import {
  Arbitrum,
  Avalanche,
  Base,
  BSC,
  ETH,
  Optimism,
  Polygon,
} from "../../public/assets";

const networkArr = [
  { id: 1, name: "Ethereum", network: ETH },
  { id: 2, name: "BNB Chain", network: BSC },
  { id: 3, name: "Arbitrum", network: Arbitrum },
  { id: 4, name: "Polygon", network: Polygon },
  { id: 5, name: "Optimism", network: Optimism },
  { id: 6, name: "Base", network: Base },
  { id: 7, name: "Avalanche", network: Avalanche },
];

export function WalletDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Image src={ETH} alt="network" width={25} height={25} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {networkArr.map((network) => (
            <DropdownMenuItem key={network.id}>
              <Image
                src={network.network}
                alt={`${network.name} logo`}
                width={25}
                height={25}
              />
              <span className="mx-2">{network.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
