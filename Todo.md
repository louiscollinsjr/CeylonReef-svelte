# Ceylon Reef Tours - Svelte Website Build Prompt

## Project Overview

Build a modern, high-impact Svelte website for Ceylon Reef Tours hosted on Vercel. The site should be clean, photography-focused, and designed to convert visitors into tour inquiries. Design inspiration from modern travel sites like Nangking, Travelcation, and Travellah.

**Stack:** Svelte + SvelteKit, Vercel hosting, JavaScript. Placeholder for background images (client will add later). Focus on communication channels with free tier services.

**Delivery Target:** 4 weeks

---

## Core Features

### 1. Homepage

**Hero Section**
- Full-screen hero with a placeholder for a stunning image (Sigiriya sunrise, Yala elephant, Mirissa sunset)
- Overlay text: "Discover the Real Sri Lanka. Handcrafted Journeys Beyond the Guidebook."
- Two CTAs: "Browse Tours" (navy button) and "Contact Us" (accent color button)
- Optional: Scroll indicator showing content below

**Trust Signals**
- 4 key pillars displayed as cards or inline blocks below hero:
  - Local Guides: "Sri Lankan guides who live in these regions"
  - Small Groups: "Maximum 8 people per tour"
  - Bespoke Itineraries: "Customize to your interests"
  - [Family Heritage]: Based on company story (to be provided)

**Sri Lanka Facts Section**
- Rotate or display compelling facts about Sri Lanka:
  - "One of the most biodiverse countries on Earth"
  - "You can see whales and elephants in the same day"
  - "8 UNESCO World Heritage Sites"
  - "The Pearl of the Indian Ocean"
  - "Home to one of the largest wild elephant populations in Asia"
  - Implement as a carousel or static grid with subtle animations

**Tour Preview Grid**
- Display all 4 tours in a 2-column grid (mobile: 1 column, tablet: 2 columns, desktop: responsive)
- Each tour card shows:
  - Featured image (placeholder for now)
  - Tour title
  - Duration (e.g., "9 Nights / 10 Days")
  - Category badge (Cultural, Wildlife, Honeymoon, Adventure)
  - Price range ("from $X per person")
  - One-line description
  - "Learn More" button

**Testimonials Section**
- Display 2-3 customer testimonials
- Each shows: quote, name, role/origin, optional small photo
- Can be static or a carousel

**Instagram Feed Preview**
- Embed recent Instagram posts (use Instagram Graph API or simple embed)
- Show 3-4 recent posts with link to full Instagram profile
- Simple caption: "Follow us on Instagram for daily updates from our tours"

**CTA Section**
- Before footer: "Ready to start your adventure?"
- Primary button: "Explore Tours"
- Secondary button: "Get in Touch"

---

### 2. Tours Page

**Page Layout**
- Header with filter/category buttons (optional): "All", "Cultural", "Wildlife", "Honeymoon"
- Grid of all 4 tours (same card style as homepage preview)
- Each card is clickable and links to the individual tour detail page

**Tour Card Component**
- Image, title, duration, category badge, price, description snippet
- Hover effect (subtle shadow/scale)
- "Learn More" button

---

### 3. Individual Tour Detail Pages

**URL Structure:** `/tours/[tour-slug]`

**Page Sections**

1. **Hero Section**
   - Large hero image (placeholder for tour-specific photo)
   - Tour title overlay
   - Quick facts bar (duration, best for, difficulty, price)

2. **Overview**
   - 2-3 paragraph description of the tour
   - Compelling, sensory language

3. **Highlights Grid**
   - 5-7 key experiences displayed as cards
   - Each: small image placeholder, activity title, brief description
   - Icon or emoji for each activity

4. **Day-by-Day Itinerary**
   - Expandable sections for each day
   - Day number, title, time frame, description, highlights
   - Smooth accordion animation

5. **Inclusions/Exclusions**
   - Two columns: "What's Included" and "What's Not Included"
   - Bullet lists with icons (checkmark for included, X for excluded)

6. **Image Gallery**
   - Grid of 8-12 placeholder images
   - Lightbox or modal on click
   - Optional: carousel view

7. **Testimonials**
   - Section showing 2-3 testimonials from people who took this tour
   - Quote, name, photo (small)

8. **CTA Section**
   - Sticky or fixed: "Inquire About This Tour" button
   - Links to contact page with tour pre-selected

---

### 4. Contact Page

**Form Section**
- Heading: "Let's Plan Your Adventure"
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Phone (required)
  - Tour of Interest (dropdown, selecting from 4 tours)
  - Message (textarea)
  - Checkbox: "I agree to be contacted"
  - Submit button: "Send Inquiry"
- Success message: "Thank you! We'll be in touch within 24 hours."

**Form Integration**
- Use **Resend** (free tier) or **SendGrid** (free tier) for email delivery
- On submit:
  - Send confirmation email to visitor (via Resend/SendGrid)
  - Send inquiry details to company email
  - Store inquiry in optional database (Supabase free tier recommended)

**WhatsApp Direct Link**
- Prominent green WhatsApp button
- Text: "Chat with us on WhatsApp"
- Links to pre-filled WhatsApp message (e.g., "Hi, I'm interested in your tours")
- Format: `https://wa.me/[phone_number]?text=I%20am%20interested%20in%20your%20tours`

**Other Contact Methods**
- Display phone number with link to dial
- Display email with link to email client
- Office hours (Mon-Fri, 9 AM - 5 PM IST or similar)
- Optional: Google Map embed showing office location (if applicable)

**Live Chat Widget (Optional)**
- **Recommendation:** Tidio free tier ($0/month, includes WhatsApp integration)
- Alternative: Botpress free tier
- Routes inquiries to WhatsApp or email
- Only implement if company wants real-time chat

---

### 5. Navigation & Layout

**Header/Nav**
- Logo (placeholder, left side)
- Menu items: Home, Tours, Contact, About (optional)
- Desktop: Horizontal nav with "Contact Us" button on right
- Mobile: Hamburger menu
- Nav sticks to top on scroll (optional parallax effect)

**Footer**
- Quick links: Tours, Contact, About, Blog/Travel Tips
- Social links: Instagram, Facebook, WhatsApp
- Contact info: Phone, email, office hours
- Copyright

**Global CTA Button**
- "Contact Us" or "Inquire" button visible in bottom-right corner on all pages (sticky)
- Disappears when user scrolls to contact section
- Mobile: appears above footer

---

## Design System

### Colors
- **Primary:** Navy blue (#1F4E78 or similar)
- **Secondary:** Teal (#2E8B9E or similar)
- **Accent:** Gold or coral (#E8A87C or similar)
- **Neutral:** Off-white (#F5F5F5), white (#FFFFFF)
- **Text:** Dark gray (#333333)

### Typography
- **Headers:** Bold, sans-serif (e.g., Arial, Inter, or system font)
- **Body:** Clean sans-serif, 16px minimum
- **Headings:** H1 (44px), H2 (32px), H3 (24px)

### Layout Principles
- Large, breathing white space
- Photography drives design
- Mobile-first responsive (320px to 1920px+)
- Max content width: 1200px
- Consistent 16px or 24px spacing/padding

### Components
- **Buttons:** Rounded corners (8px), clear hover states, shadow on hover
- **Cards:** Subtle shadow, hover lift effect
- **Inputs:** Clean borders, focus states with accent color
- **Modals/Lightbox:** Dark overlay, smooth fade-in

---

## Data Structure

### Tours Data (JSON or CMS)
```
{
  id: "tour-1",
  slug: "9-day-cultural-circuit",
  title: "9 Nights / 10 Days Cultural Circuit",
  category: "cultural",
  description: "...",
  price: 2400,
  currency: "USD",
  duration: { nights: 9, days: 10 },
  bestFor: ["First-timers", "Culture enthusiasts"],
  difficulty: "moderate",
  highlights: [...],
  itinerary: [
    { day: 1, title: "Arrival in Negombo", ... },
    ...
  ],
  inclusions: [...],
  exclusions: [...],
  images: { hero: "url", gallery: ["url", ...] },
  testimonials: [...]
}
```

### Testimonials Data
```
{
  name: "John Smith",
  quote: "Amazing experience...",
  role: "From USA",
  image: "url",
  tourId: "tour-1" (optional: tie to specific tour)
}
```

### Sri Lanka Facts Data
```
[
  { fact: "One of the most biodiverse countries on Earth", icon: "🌍" },
  { fact: "You can see whales and elephants in the same day", icon: "🐋" },
  ...
]
```

---

## Communication & Lead Capture

### Email Service
- **Recommendation:** Resend (resend.com) - $0 for up to 100 emails/day
- Free tier is generous and developer-friendly
- Alternative: SendGrid (50 emails/day free)

### Implementation
1. Contact form on Contact page
2. On submit:
   - Send confirmation email to visitor (template included)
   - Send inquiry details to company email
   - Optional: Store in Supabase for admin dashboard
3. Error handling and validation on form

### WhatsApp Integration
- Use Click-to-Chat API: `https://wa.me/[phone_number]`
- No API authentication needed
- Large green button with WhatsApp icon
- Pre-filled message example: "Hello, I'm interested in your tours. Can you provide more information?"

### Optional: Admin Dashboard
- Simple page to view inquiries (if using Supabase)
- Display: Name, Email, Phone, Tour, Message, Date
- No complex authentication needed initially

---

## Technical Requirements

### Framework
- **Svelte** with **SvelteKit**
- Modern, lightweight, fast
- Easy to add interactivity without bloat

### Hosting
- **Vercel** (automatic deployments, free tier)
- Environment variables for email service API keys

### Styling
- **Tailwind CSS** for utility-first styling
- Optional: SvelteKit theme setup for consistent design tokens

### Dependencies
- `resend` - email service
- `svelte-carousel` or similar for carousels (if needed)
- `astro-seo` or similar for SEO optimization
- Standard form handling with SvelteKit

### SEO
- Meta tags for homepage and key pages
- Open Graph tags for social sharing
- Structured data (Schema.org) for tours
- Sitemap generation

### Performance
- Image optimization (lazy loading, responsive images)
- CSS/JS minification (automatic with Vercel)
- Lighthouse score target: 90+

---

## Specific Pages to Build

1. **Homepage** (`/`) - As described above
2. **Tours Listing** (`/tours`) - Grid of all 4 tours
3. **Tour Detail** (`/tours/[slug]`) - Individual tour pages (reusable component)
4. **Contact** (`/contact`) - Form, WhatsApp link, info
5. **About** (`/about`) - Optional: Company story, team, mission (can be placeholder initially)

---

## Content Placeholders

- All images: Use placeholder service or gray boxes for now (client will provide)
- Tour titles and descriptions: Use provided 4 tour packages (rewrite for marketing appeal)
- Company info: Phone, email, WhatsApp number, office hours (to be provided)
- Testimonials: 2-3 placeholder testimonials (can be updated later)

---

## Deliverables Checklist

- [ ] Homepage with hero, trust signals, tour preview, testimonials, Instagram preview
- [ ] Tours listing page
- [ ] 4 individual tour detail pages (dynamic routing)
- [ ] Contact page with working form (Resend integration)
- [ ] WhatsApp button/link on all pages
- [ ] Navigation and footer
- [ ] Mobile-responsive design (all breakpoints)
- [ ] SEO optimized (meta tags, structured data)
- [ ] Deployed on Vercel with custom domain ready
- [ ] Admin view for inquiries (optional, Supabase)
- [ ] Dark mode option (nice-to-have, not required)

---

## Development Notes

- Use SvelteKit's `+page.svelte` and `+page.ts` for routing
- Create reusable components: TourCard, Testimonial, Button, Modal, etc.
- Use store (Svelte stores) for global state (selected tour, filters, etc.)
- Keep animations subtle and purposeful (no excessive animations)
- Test on real devices (iOS Safari, Chrome, Firefox)
- Ensure form submission works end-to-end with Resend

---

## Timeline Estimate

- **Phase 1:** Setup SvelteKit, build homepage, nav, footer
- **Phase 2:** Build tours listing and detail pages
- **Phase 3:** Implement contact form with Resend, WhatsApp integration
- **Phase 4:** Polish, responsive design, SEO, testing
- **Phase 5:** Deploy to Vercel, final tweaks
- **Phase 6:** Buffer/refinement based on feedback

---

## Notes

- This is a marketing site, not a booking engine. Conversions are through contact form or WhatsApp.
- Keep loading times fast (Vercel will help with this).
- Think "visual storytelling"—let imagery carry the message.
- Instagram integration keeps the site fresh without needing a blog backend.
- Free tier email service is sufficient for expected inquiry volume.



----

# Tour packages

# 09 Nights 10 Days tour of Sri Lanka - Tour Guide In Sri Lanka
### Details

#### 01

##### Day 1: Arrival in Negombo

###### 10.00 AM to 10.00 PM

Upon your arrival at the airport at 6:30 pm, our representative will warmly welcome you. From there, we'll head to the charming coastal town of Negombo, a short 20-minute drive away. Explore the fish market, the Dutch canal, and St. Mary's Church. Relax and unwind at Hotel Goldi Sand, where you'll spend the night.

#### 02

##### Day 2: Sigiriya Exploration

###### 10.00 AM to 9.00 PM

After breakfast, we'll journey to Sigiriya. Along the way, we'll visit the iconic Dambulla Cave Temple, a UNESCO World Heritage site housing impressive cave paintings and statues. In the afternoon, immerse yourself in the majestic Sigiriya Lion Rock, a marvel of ancient architecture. Experience the local village life with a bullock cart ride and a catamaran ride. Enjoy traditional Sri Lankan "Roti" prepared in front of you by local village women. Later, experience the thrill of elephant back riding. Overnight stay at Fresco Water Villa in Sigiriya.

#### 03

##### Day 3: More of Sigiriya

###### 11.00 AM to 8.00 PM

The day begins with a visit to the majestic Sigiriya Lion Rock, where you can witness the ancient ruins built by King Kasyapa and admire the breathtaking views from the top. Afterward, embark on a village tour with a traditional Sri Lankan lunch experience, including bullock cart riding and a catamaran ride. In the afternoon, embark on a thrilling safari at either Minneriya or Hurulu National Park, famous for its abundant wildlife. Overnight stay at Fresco Water Villa in Sigiriya.

#### 04

##### Day 4: Journey to Kandy

###### 9.00 AM to 9.00 PM

After breakfast, we'll head to the picturesque city of Kandy, stopping by Nalanda Gedige, a unique architectural blend of Hindu and Buddhist influences, and a spice and herbal garden in Matale. In Kandy, visit the sacred Temple of the Tooth Relic, explore Kandy View Point, the serene Holy Lake, and experience the vibrant local market. In the evening, you can choose to witness a captivating cultural dance show. Spend the night at Thilanka Resort & Spa in Kandy.

#### 05

##### Day 5: Enchanting Nuwara Eliya

Today, we'll drive to Nuwara Eliya, the "Little England" of Sri Lanka. On the way, visit a tea factory to learn about the tea-making process and enjoy tea cultivation in the beautiful tea estates. Take in the picturesque view of Ramboda Waterfalls and visit Sri Bhakta Hanuman Temple. In Nuwara Eliya, explore Gregory Lake and the charming city. Overnight stay at Ripon Grand Hotel in Nuwara Eliya.

#### 06

##### Day 6: Beautiful Ella

After breakfast, we'll head to Ella, stopping by Moon Plains and Ashok Wathika in Nuwara Eliya. Prepare for an unforgettable train journey from Nanuoya to Ella, offering stunning views of the Sri Lankan countryside. Once in Ella, hike up Little Adam's Peak and visit the iconic Nine Arch Bridge. Stay overnight at Mount Heaven Hotel in Ella.

#### 07

##### Day 7: Wildlife Adventure in Yala

Next, we'll drive to Yala, famous for its wildlife encounters. In Yala, explore Seetha Cave, where King Ravana is believed to have hidden Princess Sita. Prepare for an exciting jungle safari in Yala National Park, known for its abundant leopard population. Stay overnight at Oak Ray Wild Hotel in Yala.

#### 08

##### Day 8: Relaxing Mirissa

From Yala, we'll proceed to the serene beaches of Mirissa. Spend the evening relaxing on the sandy shores. Overnight stay at Randiya Sea View Hotel in Mirissa.

#### 09

##### Day 9: Whales and Dolphins

Early in the morning, around 6 am, we'll embark on a thrilling whales and dolphins watching tour. Spend the rest of the day relaxing on the pristine Mirissa beach. Stay overnight at Randiya Sea View Hotel in Mirissa.

#### 10

##### Day 10: Departure from Mirissa

[09 Nights 10 Days tour of Sri Lanka - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/09-nights-10-days-tour-of-sri-lanka/)

# 09 Nights 10 Days tour of Sri Lanka - Tour Guide In Sri Lanka
### 09 Nights 10 Days tour of Sri Lanka

Welcome to our 10-day tour of Sri Lanka, an incredible journey that showcases the island’s diverse beauty, rich heritage, and unforgettable experiences. As your trusted tour guide in Sri Lanka, we are committed to making your trip an unforgettable adventure.

|  Included |* Specilaized Bilingual Guide* Private Transport* Entrance Fees* Box Lunch,Water,Dinner and Snacks|
|---|---|
|  Excluded |* Additional Services* Insurance* Drink* Tickets|
We hope you have enjoyed your 10-day tour with us, experiencing the best of Sri Lanka’s beauty, culture, and wildlife. As your dedicated tour guide in Sri Lanka, we wish you safe travels and fond memories of this remarkable island nation. Thank you for choosing us to be part of your unforgettable adventure!

[09 Nights 10 Days tour of Sri Lanka - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/09-nights-10-days-tour-of-sri-lanka/)

# 10 Days 11 Days Tour Sri Lanka Round Tours - Tour Guide In Sri Lanka
### Details

#### 01

##### Day 1: Arrival in Negombo

Upon your arrival at the airport, we will warmly welcome you and drive you to Negombo. Explore the vibrant fish market and the serene Dutch canal. In the evening, unwind on the stunning beach of Negombo. Enjoy a comfortable night's stay at Hotel Beacon Beach.

#### 02

##### Day 2: Discovering Sigiriya

After breakfast, we'll head to the iconic Sigiriya from Negombo. En route, we'll visit the magnificent Dambulla Golden Temple. Experience the rural charm with a village tour, including a traditional lunch at a farmer's house, complete with bullock cart riding and catamaran riding. Spend the night at Asna Sigiriya Hotel.

#### 03

##### Day 3: Sigiriya Adventure

The day begins with a visit to the majestic Sigiriya Lion Rock, a UNESCO World Heritage site. In the evening, embark on an exciting jungle safari at Hurulu Eco Park to witness elephants in their natural habitat. You also have the option for an Ayurvedic body massage or elephant riding. Enjoy another comfortable night at Asna Sigiriya Hotel.

#### 04

##### Day 4: Journey to Kandy

Today, we'll drive to the charming city of Kandy. Along the way, we'll visit Nalanda Gedige, an intriguing ancient architectural site. In Kandy, witness a captivating cultural dance show and explore the revered Temple of the Tooth Relic. Rest for the night at Thilanka Kandy Hotel.

#### 05

##### Day 5: Scenic Nuwara Eliya

From Kandy, we'll proceed to Nuwara Eliya, a picturesque hill station. Morning visits to the gem museum and wood carving places await you. Enjoy the scenic tea plantations and visit a tea factory to witness the tea-making process. Stop by Ramboda Waterfall before retiring for the night at Ripon Grand Hill Hotel.

#### 06

##### Day 6: Horton Plains and Gregory Lake

Start the day with an early morning visit to the enchanting Horton Plains. Take in the breathtaking beauty of the area and enjoy the serene surroundings. Later, visit Gregory Lake to unwind. Spend another relaxing night at Ripon Grand Hill Hotel.

#### 07

##### Day 7: Stunning Ella

Today, we'll head to the charming town of Ella. The highlight of the day is the scenic train journey from Nuwara Eliya to Ella, one of the most beautiful railway tracks in Asia. Upon arrival, visit Little Adam's Peak and enjoy the mesmerizing views. Overnight stay at Ravan Face Hotel.

#### 08

##### Day 8: Wildlife in Yala

From Ella, we'll drive to Yala, famous for its wildlife. Visit the iconic Nine Arch Bridge and witness the majestic Ravana Waterfall. In the afternoon, embark on an exciting jungle safari in Yala National Park, known for its diverse wildlife. Stay overnight at Tringa Villa Hotel.

#### 09

##### Day 9: Tranquil Sinharajaya

Today, we'll head to the serene Sinharajaya rainforest. Check-in to Sinharajaya Rain Forest Mount Lodge and relax amidst nature's beauty.

#### 10

##### Day 10: Exploring Galle

Begin the day with a trekking adventure in the Sinharajaya rainforest, a nature lover's paradise. Later, drive to the historic city of Galle and visit the iconic Dutch Fort. Enjoy a comfortable night at Gingaga Lodge Hotel.

#### 11

##### Day 11: Departure

[10 Days 11 Days Tour Sri Lanka Round Tours - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/amber-palace/)

# 10 Days 11 Days Tour Sri Lanka Round Tours - Tour Guide In Sri Lanka
### 10 Days 11 Days Tour Sri Lanka Round Tours

Welcome to our 11-day tour of Sri Lanka, a journey that will take you through the best of our beautiful island’s culture, nature, and heritage. As your trusted tour guide in Sri Lanka, we are dedicated to making your trip an unforgettable adventure.

|  Included |* Specialized Bilingual Guide* Private Transport* Entrance Fees* Box Lunch, Water, Dinner, and Snacks|
|---|---|
|  Excluded |* Additional Services* Insurance* Drink* Tickets|
We hope you have enjoyed your 11-day tour with us, experiencing the best of Sri Lanka’s beauty and culture. As your dedicated tour guide in Sri Lanka, we wish you safe travels and fond memories of this remarkable island nation. Thank you for choosing us to be part of your unforgettable adventure!.

[10 Days 11 Days Tour Sri Lanka Round Tours - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/amber-palace/)

# 08 Nights 09 Days Wild Tours - Tour Guide In Sri Lanka
### Details

#### 01

##### Day 01: Arrival in Sigiriya

Upon your arrival at the airport at 15.10 p.m, our friendly representative will welcome you and assist with the transfer to Sigiriya, which will take approximately 3.5 hours. Check in to the Hotel Asna and relax after your journey.

#### 02

##### Day 02: Sigiriya Exploration

After a delicious breakfast, we'll visit the Sigiriya Rock Fortress, also known as Lion Rock, a UNESCO World Heritage site. Enjoy the breathtaking views from the top. Later, experience the traditional village life with a Bullock cart ride and savor a delightful Sri Lankan lunch. In the afternoon, we'll take you for an exciting Minneriya National Park Safari to witness the amazing wildlife. Return to Hotel Asna and unwind.

#### 03

##### Day 03: Transfer to Kandy

Following breakfast, we'll depart for Kandy, which will take about 3 hours. On our way, we'll stop at the Dambulla Cave Temple, a magnificent ancient Buddhist temple complex. Upon reaching Kandy, visit Kandy Lake, Kandy View Point, and the Royal Botanical Garden. Optionally, you can join a Cookery Class. In the evening, we'll witness a captivating Kandyan dance performance and visit the Temple of the Tooth. Check in at Thilanka Resort & Spa and relax.

#### 04

##### DAY 4 : Transfer to the airport and return to the agency

###### Day 04: Journey to Nuwara Eliya

After breakfast, we'll head to Nuwara Eliya, with a stopover at Ramboda waterfall, a Ceylon tea factory, and Tea Cultivation. In Nuwara Eliya, often referred to as "Little England," we'll explore the picturesque city, including the Lake Gregory Park, Golf course, Strawberry farms, Waterfalls, and tea plantations. Check-in at Ripon Grand for a comfortable overnight stay.

#### 05

##### Day 05: Horton Plains and Ella Train Ride

Early morning, around 05.30 a.m, we'll visit Horton Plains, famous for its striking landscapes, Worlds End, and Bakers Falls. Next, we embark on the most scenic train journey to Ella from Nanu Oya station. Upon arrival in Ella, we'll transfer you to Hotel Ravan Face for relaxation.

#### 06

##### Day 06: Ella's Charm

After breakfast, we'll explore the stunning 9 Arch Bridge, Ella Gap, and Rawana Ella fall. Later, we'll transfer you to Yala, approximately 3 hours away. Check-in at Tringa Villas and unwind. In the evening, we'll enjoy a thrilling jeep safari at Yala National Park.

#### 07

##### Day 07: Galle Fort and Mirissa

After breakfast, we'll travel to Mirissa, stopping at Galle Fort and Old Mansion Gate en route. Discover fascinating places like the Dondra Light House and the stilt fishermen in Weligama. Once in Galle, wander through the charming streets of the Fort, filled with boutiques and colonial-era buildings. Check-in at Randiya Resort & Spa, Mirissa, and enjoy the beach and water sports.

#### 08

##### Day 08: Whales and Dolphins Watching

Whale and dolphin watching at 6:15 a.m. followed by a relaxing day on the beautiful Mirissa beach. Enjoy the sun, sea, and optional water sports activities. Unwind and relish the coastal charm until the enchanting sunset.

#### 09

##### Day 09: Departure from Colombo

[08 Nights 09 Days Wild Tours - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/08-nights-09-days-wild-tours/)

# 08 Nights 09 Days Wild Tours - Tour Guide In Sri Lanka
### 08 Nights 09 Days Wild Tours

Welcome to the beautiful island of Sri Lanka! We are delighted to have you on this 08 Nights/09 Days tour, where we’ll explore the best of Sri Lanka’s cultural and natural wonders. As your dedicated tour guide in Sri Lanka, we promise to make your journey unforgettable and provide you with an authentic Sri Lankan experience.

|  Included |* Specilaized Bilingual Guide* Private Transport* Entrance Fees* Box Lunch,Water,Dinner and Snacks|
|---|---|
|  Excluded |* Additional Services* Insurance* Drink* Tickets|
“Thank you for choosing us as your tour guide in Sri Lanka. We hope you had a wonderful time exploring our country’s diverse attractions and creating unforgettable memories. We wish you safe travels and hope to see you again in Sri Lanka in the future!”

[08 Nights 09 Days Wild Tours - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/08-nights-09-days-wild-tours/)

# 4 Nights 5 Days Honeymoon Tours - Tour Guide In Sri Lanka
### Details

#### 01

##### Day 01: Arrival in Negombo

###### 10.00 AM to 10.00 PM

Upon your arrival at Sri Lanka airport, our warm representative will greet you and accompany you to the coastal paradise of Negombo. Relax and unwind on the picturesque beach of Jetwing Beach Hotel. As the sun sets, enjoy a complimentary romantic dinner to start your honeymoon on a delightful note.

#### 02

##### Day 02: Discovering Kandy

###### 10.00 AM to 9.00 PM

After a scrumptious breakfast, we'll journey to the cultural capital of Kandy. En route, we'll visit the heartwarming Pinnawala Elephant Orphanage, where you can choose to enjoy an optional elephant ride. In the evening, explore the beauty of Kandy City, including the serene Kandy Lake, the panoramic Kandy View Point, the Arts and Crafts Center, the Gem Museum, and the captivating cultural dance show. Retire to Amaya Hills Hotel for a complimentary dinner and a peaceful evening.

#### 03

##### Day 03: Exploring Nuwara Eliya

###### 11.00 AM to 8.00 PM

Following a hearty breakfast, we'll set out for Nuwara Eliya, also known as "Little England." Along the way, we'll stop at the Ramboda waterfall viewpoint, a tea plantation, and a Tea Factory, where you can experience tea cultivation in Sri Lanka. In the evening, explore the enchanting Nuwara Eliya city, including Lake Gregory Park, Golf Course, and Strawberry Farms. Your overnight stay at Hotel Hill Club will be accompanied by a complimentary dinner.

#### 04

##### Day 04: Bentota Bliss

###### 9.00 AM to 9.00 PM

After breakfast, we'll venture to the coastal haven of Bentota. For thrill-seekers, an exhilarating white-water rafting adventure awaits at Kithulgala. In the evening, visit a turtle hatchery and embark on a soothing Madu River boat safari. Your overnight stay at The Surf Beach Hotel includes another complimentary dinner.

#### 05

##### Day 05: Departure from Colombo

###### 9.00 AM to 5.00 PM

[4 Nights 5 Days Honeymoon Tours - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/4-nights-5-days-honeymoon-tours/)

# 4 Nights 5 Days Honeymoon Tours - Tour Guide In Sri Lanka
### 4 Nights 5 Days Honeymoon Tours

Welcome to our 5-day honeymoon tour in Sri Lanka, an enchanting journey filled with romantic experiences and breathtaking sights. As your trusted tour guide in Sri Lanka, we are dedicated to making your honeymoon a truly memorable and special occasion.

|  Included |* Specilaized Bilingual Guide* Private Transport* Entrance Fees* Box Lunch,Water,Dinner and Snacks|
|---|---|
|  Excluded |* Additional Services* Insurance* Drink* Tickets|
As your dedicated tour guide, we have designed this honeymoon tour to showcase the best of Sri Lanka’s beauty and culture, ensuring that you have a blissful and memorable experience with your loved one. Let the magic of this island nation enchant you as you embark on a journey of love and exploration. Congratulations on your special journey together, and we wish you a lifetime of happiness and love!

[4 Nights 5 Days Honeymoon Tours - Tour Guide In Sri Lanka](https://tourguideinsrilanka.com/tour-package/4-nights-5-days-honeymoon-tours/)