import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[11px] leading-[1.33337] border-t border-black/[0.08] pt-10 pb-16">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Footnotes */}
        <div className="space-y-3 pb-8 border-b border-black/[0.08] text-[10.5px] leading-relaxed">
          <p>
            * Pricing is before trade-in. Monthly pricing requires 24-month installment contract with 0% APR from Apple Card Monthly Installments (ACMI) or carrier financing. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR.
          </p>
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID. Offer may not be available in all stores, and may vary between in-store and online trade-in. Restrictions and limitations may apply.
          </p>
          <p>
            2. Carrier deals subject to terms and credit approval. Trade-in and carrier bill credits may apply over 24 or 36 months depending on carrier.
          </p>
          <p>
            3. Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. Variable APRs for Apple Card range from 19.24% to 29.49% based on creditworthiness.
          </p>
          <p>
            4. Apple Fitness+ offer available to new subscribers who purchase an eligible device. $9.99/month after trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
          </p>
          <p>
            5. Special pricing available to qualified customers. To learn more about how to start your savings, talk to an Apple Specialist in a store or call 1-800-MY-APPLE.
          </p>
          <p>
            6. To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.
          </p>
        </div>

        {/* Directory Sitemap Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-b border-black/[0.08]">
          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">Shop and Learn</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Store</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Mac</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">iPad</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] text-[#1d1d1f] font-medium transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Watch</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">AirPods</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">TV & Home</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">AirTag</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">Apple Wallet</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Card</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Pay</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Cash</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">Account</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Manage Your Apple ID</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Store Account</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">Entertainment</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple One</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple TV+</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Music</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Arcade</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Fitness+</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple News+</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Podcasts</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Books</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">App Store</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-2.5">Apple Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Genius Bar</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Today at Apple</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Group Reservations</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Camp</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Store App</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Certified Refurbished</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Trade In</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Carrier Deals at Apple</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shopping Help</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">For Business</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple and Business</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shop for Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">For Education</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple and Education</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shop for K-12</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shop for College</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">For Healthcare</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple in Healthcare</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Health on Apple Watch</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Health Records on iPhone</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">For Government</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shop for Government</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shop for Veterans and Military</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">Apple Values</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Environment</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Inclusion and Diversity</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Racial Equity and Justice</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Supplier Responsibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d1d1f] mb-2.5">About Apple</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Leadership</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Investors</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Ethics & Compliance</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* More ways to shop text */}
        <div className="py-4 border-b border-black/[0.08] text-[#6e6e73]">
          More ways to shop: <a href="#" className="text-[#0071e3] underline hover:text-[#0077ed]">Find an Apple Store</a> or <a href="#" className="text-[#0071e3] underline hover:text-[#0077ed]">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        {/* Legal & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between text-[#86868b] gap-3">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Site Map</a>
          </div>
          <div className="hover:text-[#1d1d1f] cursor-pointer transition-colors">
            United States
          </div>
        </div>
      </div>
    </footer>
  );
}
