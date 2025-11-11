"use client";

import { Media, MasonryGrid, Card, Column, Text } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid gap="-1" columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Card radius="l-4" direction="column" border="neutral-alpha-medium">
          <Media
            border="neutral-alpha-weak"
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={index}
            radius="m"
            aspectRatio={
              image.orientation === "horizontal" ? "16 / 9" : "3 / 4"
            }
            src={image.src}
            alt={image.alt}
          />
          <Column fillWidth paddingX="20" paddingY="24" gap="8">
            <Text variant="body-default-xl">{image.alt}</Text>
            <Text onBackground="neutral-weak" variant="body-default-s">
              {image.date}
            </Text>
          </Column>
        </Card>
      ))}
    </MasonryGrid>
  );
}
