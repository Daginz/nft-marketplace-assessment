# Frontend Developer Assessment

## Missions

### 1. Display NFT Gallery Page
Goal: Create a new `/explore` route that displays a responsive galler of NFTS.
- Fetch data from the API endpoint:
    `http://localhost:3002/api/creations/explore`
- Display each NFT in a card with:
    - Image 
    - Creator name
    - Title
    - Category (if available)
- Use Tailwind CSS for styling.
- Make the layout responsive (mobile-first).
- Add a simple hover effect on each card.

### 2. NFT Detail Modal
Goal: Implement a modal that shows detailed NFT information.
- When a user clicks on an NFT card in the gallery, open a modal with:
    - Full image
    - Title
    - Description
    - Creator details (name, avatar if available)
- Use Next.js Intercepting Routes to implement the modal.
- Ensure the modal is accessible and closes on background click or `ESC`.

### 3. Bonus
- Add loading skeletons while fetching the NFTs.
- Animate the modal using Framer Motion.
- Improve SEO using `<head>` metadata in the explore page

## Submission Instructions
1. Push your code to a public GitHub repository.
2. Include a brief README with:
    - Your name
    - Any assumptions
    - Feature completed
    - Instructions to run the app
3. Share the GitHub link with us.

Your submission should take around 4-5 hours. Please manage your time accordingly. Thank you.