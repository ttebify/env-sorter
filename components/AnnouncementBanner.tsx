import { Button } from "@chakra-ui/react";
import {
  Banner,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerActions,
  BannerIcon,
} from "@saas-ui/react";

export default function AnnouncementBanner() {
  return (
    <Banner marginBottom={8}>
      <BannerIcon />
      <BannerContent>
        <BannerTitle>Contributors Welcome!</BannerTitle>
        <BannerDescription>
          The first stable version of Environment Variable Sorter will be
          released soon. We invite developers and contributors to join the
          project and help shape its future.
        </BannerDescription>
      </BannerContent>
      <BannerActions>
        <Button colorScheme="blue" variant="outline">
          Get Involved
        </Button>
      </BannerActions>
    </Banner>
  );
}
