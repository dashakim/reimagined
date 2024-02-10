'use client';
import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';

const StyledDesc = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  & p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }

  ,
  @media (max-width: 700px) {
    font-size: 0.8rem;

    a {
      padding: 1rem;
    }

    p,
    div {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
    }

    p {
      align-items: center;
      inset: 0 0 auto;
      padding: 2rem 1rem 1.4rem;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
      background: linear-gradient(to bottom, rgba(var(--background-start-rgb), 1), rgba(var(--callout-rgb), 0.5));
      background-clip: padding-box;
      backdrop-filter: blur(24px);
    }

    div {
      align-items: flex-end;
      pointer-events: none;
      inset: auto 0 0;
      padding: 2rem;
      height: 200px;
      background: linear-gradient(to bottom, transparent 0%, rgb(var(--background-end-rgb)) 40%);
      z-index: 1;
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, auto));
  max-width: 100%;
  width: var(--max-width);
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-bottom: 120px;
    max-width: 320px;
    text-align: center;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

const StyledCode = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`;

const StyledCard = styled.a`
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition:
    background 200ms,
    border 200ms;

  & span {
    display: inline-block;
    transition: transform 200ms;
  }

  & h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  & p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
    text-wrap: balance;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);

      span {
        transform: translateX(4px);
      }
    }
  }

  @media (prefers-reduced-motion) {
    .card:hover span {
      transform: none;
    }
  }
  @media (max-width: 700px) {
    padding: 1rem 2.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }
`;

const StyledDivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  ::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  ::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }

  ::before,
  ::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  @media (max-width: 700px) {
    padding: 8rem 0 6rem;
  }

  ::before {
    transform: none;
    height: 300px;
  }
`;

const StyledLogo = styled.img`
  position: relative;
`;

export default function Home() {
  return (
    <StyledMain>
      <StyledDesc>
        <p>
          Get started by editing&nbsp;
          <StyledCode>src/app/page.tsx</StyledCode>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
          </a>
        </div>
      </StyledDesc>

      <StyledDivImage>
        <Image src="/next.svg" alt="Next.js Logo" className={styles.logo} width={180} height={37} priority />
      </StyledDivImage>

      <StyledGrid>
        <StyledCard
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </StyledCard>

        <StyledCard
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </StyledCard>

        <StyledCard
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </StyledCard>

        <StyledCard
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </StyledCard>
      </StyledGrid>
    </StyledMain>
  );
}
