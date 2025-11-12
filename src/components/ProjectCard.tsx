"use client";

import {
  Avatar,
  AvatarGroup,
  Card,
  Carousel,
  Column,
  Flex,
  Heading,
  Icon,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  date: string;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  date,
  technologies,
}) => {
  return (
    <Card
      fillWidth
      radius="l-4"
      direction="column"
      border="neutral-alpha-medium"
    >
      <Row fillWidth paddingX="m" paddingY="12" gap="s" vertical="center">
        {avatars?.length > 0 && (
          <AvatarGroup
            gap="8"
            vertical="center"
            avatars={avatars}
            size="m"
            reverse
          />
        )}
        <Text style={{ whiteSpace: 'nowrap', flexShrink: 0 }} variant="label-default-s">{date}</Text>
        {technologies?.length > 0 && (
          <Flex fillWidth horizontal="end" gap="8" wrap>
            {technologies.map((tech) =>
              tech == "Windows" || tech == "Android" || tech == "Browser" ? (
                <Icon size="s" key={tech} name={tech.toLowerCase()} />
              ) : (
                <Tag key={tech} variant="brand">
                  {tech}
                </Tag>
              )
            )}
          </Flex>
        )}
      </Row>
      <Carousel
        sizes="(max-width: 560px) 100vw, 560px"
        items={images.map((image) => ({
          slide: <Media src={image} alt={title} aspectRatio="16 / 9" />,
          alt: title,
        }))}
      />
      <Column fillWidth paddingX="m" paddingY="24" gap="8">
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        {description?.trim() && (
          <Text
            wrap="balance"
            variant="body-default-s"
            onBackground="neutral-weak"
          >
            {description}
          </Text>
        )}
      </Column>
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="m"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">
                    Read more about this project
                  </Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Card>
  );
};
