/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  USDC,
  USDC_Transfer,
} from "generated";

USDC.Transfer.handler(async ({ event, context }) => {
  const entity: USDC_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.USDC_Transfer.set(entity);
});
