"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 text-center text-sm text-gray-600">
            <p>© {currentYear} Hamza Elshennawy. All rights reserved.</p>
        </footer>
    );
}
