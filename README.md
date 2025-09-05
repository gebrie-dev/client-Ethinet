# Ethionet Translation and Digital Services

A modern, responsive web application for Ethionet Translation and Digital Services, built with React, Styled Components, and React Router. The app provides a professional interface for translation, digital marketing, and tutoring services, featuring a sidebar navigation, modals for order and contact forms, and a dynamic testimonial slider.

## Project Architecture

Below is a Mermaid diagram illustrating the React component hierarchy:

```mermaid
graph TD
    A[App] --> B[Header]
    A --> C[NavSidebar]
    A --> D[Modal: Order]
    A --> E[Modal: Contact]
    A --> F[Routes]
    F --> G[Home Route]
    F --> H[About Route]
    F --> I[Services Route]
    F --> J[Products Route]
    F --> K[Academy Route]
    F --> L[Career Route]
    F --> M[Institutional Services Route]
    F --> N[Booking & Payments Route]
    F --> O[Contact Route]
    G --> P[HeroSection]
    G --> Q[AboutVisionSection]
    G --> R[FeaturedServicesSection]
    G --> S[TrustSection]
    G --> T[FinalCtaSection]
    