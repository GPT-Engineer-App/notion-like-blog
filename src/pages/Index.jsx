import React from "react";
import { Box, Heading, Text, VStack, HStack, Spacer, Container, Avatar, Input, IconButton, Divider, Image } from "@chakra-ui/react";
import { FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  const posts = [
    {
      id: 1,
      title: "Yazılım Mühendisliğinde Kariyer Tavsiyeleri",
      excerpt: "Yazılım mühendisliğinde başarılı bir kariyer için ipuçları...",
      author: "Ahmet Yılmaz",
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW1wbG95ZWUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjExMjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
      coverImage: 'https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTcxMzAyMTEyMHww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 2,
      title: "React ile Web Uygulamaları Geliştirme",
      excerpt: "React kütüphanesi kullanarak modern web uygulamaları nasıl geliştirilir...",
      author: "Ayşe Demir",
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzAyMTEyMXww&ixlib=rb-4.0.3&q=80&w=1080',
      coverImage: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxMzAyMTEyMXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 3,
      title: "Veri Bilimi ve Makine Öğrenmesi",
      excerpt: "Veri bilimi ve makine öğrenmesi hakkında merak edilenler...",
      author: "Mehmet Kaya",
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGF0YSUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzAyMTEyMXww&ixlib=rb-4.0.3&q=80&w=1080',
      coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuZCUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE3MTMwMjExMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
  ];

  return (
    <Container maxW="container.lg" py={8}>
      <VStack align="stretch" spacing={8}>
        <HStack>
          <Heading size="xl">Benim Blogum</Heading>
          <Spacer />
          <HStack>
            <Input placeholder="Ara..." />
            <IconButton icon={<FaSearch />} aria-label="Search" />
            <IconButton icon={<FaPlus />} aria-label="New" />
            <Avatar name="John Doe" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDIxMTIyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          </HStack>
        </HStack>
        <Input placeholder="Bugün ne hakkında yazmak istersin?" size="lg" />

        <VStack align="stretch" spacing={8}>
          {posts.map((post) => (
            <Box key={post.id} borderWidth={1} p={4}>
              <Image src={post.coverImage} alt={post.title} />
              <Heading size="lg" mt={4}>
                {post.title}
              </Heading>
              <Text mt={2}>{post.excerpt}</Text>
              <Divider my={4} />
              <HStack>
                <Avatar name={post.author} src={post.avatar} size="sm" />
                <Text fontWeight="medium">{post.author}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
