import { Button, ButtonVariant } from "./button";
import { FirmFactCard, FirmFactCardVariant } from "./firm-fact-card";
import style from "./firm-facts.module.scss";

export const FirmFacts = () => {
  return (
    <div className={style["firm-facts"]}>
      <FirmFactCard variant={FirmFactCardVariant.default}>
        <Button variant={ButtonVariant.icon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat vehicula libero non elementum. Vivamus imperdiet id magna eu
          lacinia. Donec rhoncus dictum viverra. Donec sed mi at justo
          consectetur condimentum. Ut pellentesque est in efficitur interdum.
          Pellentesque ornare quam nec diam hendrerit pretium. Donec ipsum
          turpis, feugiat quis tincidunt nec, dapibus a nulla. Ut vulputate
          neque sem, vitae molestie purus vehicula vitae. Ut elit augue,
          vehicula vitae semper non, auctor id neque.
        </Button>
      </FirmFactCard>
      <FirmFactCard variant={FirmFactCardVariant.default}>
        <Button variant={ButtonVariant.icon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat vehicula libero non elementum. Vivamus imperdiet id magna eu
          lacinia. Donec rhoncus dictum viverra. Donec sed mi at justo
          consectetur condimentum. Ut pellentesque est in efficitur interdum.
          Pellentesque ornare quam nec diam hendrerit pretium. Donec ipsum
          turpis, feugiat quis tincidunt nec, dapibus a nulla. Ut vulputate
          neque sem, vitae molestie purus vehicula vitae. Ut elit augue,
          vehicula vitae semper non, auctor id neque.
        </Button>
      </FirmFactCard>
      <FirmFactCard variant={FirmFactCardVariant.default}>
        <Button> This is a one line button </Button>
      </FirmFactCard>
      <FirmFactCard variant={FirmFactCardVariant.default}>
        <Button variant={ButtonVariant.icon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat vehicula libero non elementum. Vivamus imperdiet id magna eu
          lacinia. Donec rhoncus dictum viverra. Donec sed mi at justo
          consectetur condimentum. Ut pellentesque est in efficitur interdum.
          Pellentesque ornare quam nec diam hendrerit pretium. Donec ipsum
          turpis, feugiat quis tincidunt nec, dapibus a nulla. Ut vulputate
          neque sem, vitae molestie purus vehicula vitae. Ut elit augue,
          vehicula vitae semper non, auctor id neque.
        </Button>
      </FirmFactCard>
      <FirmFactCard variant={FirmFactCardVariant.border}>
        <Button variant={ButtonVariant.icon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat vehicula libero non elementum. Vivamus imperdiet id magna eu
          lacinia. Donec rhoncus dictum viverra. Donec sed mi at justo
          consectetur condimentum. Ut pellentesque est in efficitur interdum.
          Pellentesque ornare quam nec diam hendrerit pretium. Donec ipsum
          turpis, feugiat quis tincidunt nec, dapibus a nulla. Ut vulputate
          neque sem, vitae molestie purus vehicula vitae. Ut elit augue,
          vehicula vitae semper non, auctor id neque.
        </Button>
      </FirmFactCard>
      <FirmFactCard variant={FirmFactCardVariant.border}>
        <Button disabled variant={ButtonVariant.icon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat vehicula libero non elementum. Vivamus imperdiet id magna eu
          lacinia. Donec rhoncus dictum viverra. Donec sed mi at justo
          consectetur condimentum. Ut pellentesque est in efficitur interdum.
          Pellentesque ornare quam nec diam hendrerit pretium. Donec ipsum
          turpis, feugiat quis tincidunt nec, dapibus a nulla. Ut vulputate
          neque sem, vitae molestie purus vehicula vitae. Ut elit augue,
          vehicula vitae semper non, auctor id neque.
        </Button>
      </FirmFactCard>
      <FirmFactCard variant={FirmFactCardVariant.border}>
        <Button variant={ButtonVariant.icon}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat vehicula libero non elementum. Vivamus imperdiet id magna eu
          lacinia. Donec rhoncus dictum viverra. Donec sed mi at justo
          consectetur condimentum. Ut pellentesque est in efficitur interdum.
          Pellentesque ornare quam nec diam hendrerit pretium. Donec ipsum
          turpis, feugiat quis tincidunt nec, dapibus a nulla. Ut vulputate
          neque sem, vitae molestie purus vehicula vitae. Ut elit augue,
          vehicula vitae semper non, auctor id neque.
        </Button>
      </FirmFactCard>
    </div>
  );
};
