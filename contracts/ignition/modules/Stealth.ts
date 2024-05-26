import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StealthModule = buildModule("Stealth", (m) => {
  const token = m.contract("Stealth", ["0x47e207c2cC90c3498D9a961DE81D9295538Bfb9f"]);

  return { token };
});

module.exports = StealthModule;
