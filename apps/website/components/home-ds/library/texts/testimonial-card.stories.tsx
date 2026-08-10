import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { homeContent } from "@/lib/site-content";
import { TestimonialCard } from "./testimonial-card";

const meta = {
  title: "home-ds/library/texts/TestimonialCard",
  component: TestimonialCard
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const t = homeContent.about.testimonials[0];

export const Default: Story = {
  args: { quote: t.quote, name: t.name, role: t.role }
};

export const WithArrow: Story = {
  args: { quote: t.quote, name: t.name, role: t.role, href: "#" }
};

export const WithAvatar: Story = {
  args: {
    quote: t.quote,
    name: t.name,
    role: t.role,
    href: "#",
    avatarSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80&auto=format&fit=crop"
  }
};
