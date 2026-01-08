export const metadata = {
    title: "Refund Policy - Mumo Travels & Tours",
    description: "Learn about our refund policy for travel bookings, air tickets, visa services, and more.",
}

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen md:mt-12 mt-8 bg-background text-foreground">
            {/* Header Section */}
            <section className=" py-8 md:py-10">
                <div className="mx-auto max-w-4xl px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-balance mb-2">Refund Policy</h1>
                    <p className="text-foreground/70">Last updated: January 8, 2026</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-4 md:py-16">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="mb-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
                        <p className="text-foreground/80 leading-relaxed">
                            This Refund Policy explains the terms and conditions under which refunds may be processed for services
                            booked through Mumo Travels & Tours. By confirming a booking or making a payment, you agree to the terms
                            outlined below.
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">1. General Refund Policy</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        All refunds are subject to the refund policies of airlines, hotels, embassies, tour operators, and
                                        other third-party service providers.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Mumo Travels & Tours acts as a service facilitator and follows the rules set by these providers.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Refund eligibility, amount, and processing time may vary depending on the service booked.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">2. Air Ticket Refunds</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Air ticket refunds are governed by the airline's fare rules and conditions.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Some tickets may be non-refundable or partially refundable.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Any service fees, convenience fees, or processing charges charged by Mumo Travels & Tours are
                                        non-refundable, unless stated otherwise.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Refunds are processed only after approval from the airline.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">3. Visa Fees & Visa Services</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Visa fees, embassy fees, and service charges are non-refundable, regardless of visa approval or
                                        rejection.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Mumo Travels & Tours is not responsible for visa rejection, delays, or changes in embassy decisions.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Any documentation or processing fees paid are non-refundable once the visa application has been
                                        submitted.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">4. Tour Packages & Hotel Bookings</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Refunds for tour packages and hotel bookings depend on the supplier's cancellation and refund
                                        policy.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Cancellation charges may apply based on the date of cancellation.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        No refund will be provided for unused services, no-shows, or early departures, unless allowed by the
                                        supplier.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">5. Umrah & Religious Tour Services</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Refund eligibility for Umrah packages depends on airline, hotel, transport, and service provider
                                        policies.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Once bookings are confirmed, partial or full cancellation charges may apply.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Visa fees and processing charges are non-refundable.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">6. Travel Insurance</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Refunds for travel insurance are subject to the insurance provider's terms and conditions.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Once an insurance policy is issued, refunds may not be available.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 7 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">7. Refund Processing Time</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Approved refunds are processed after we receive confirmation from the relevant service provider.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Refund processing time may take 7–30 working days, depending on airline, bank, or payment gateway
                                        procedures.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Delays caused by third parties are beyond our direct control.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 8 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">8. Mode of Refund</h2>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Refunds will be issued using the original payment method, wherever possible.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>
                                        Bank charges, currency conversion fees, or transaction fees (if any) will be deducted from the
                                        refund amount.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 9 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">9. Non-Refundable Situations</h2>
                            <p className="mb-4 text-foreground/80">
                                Refunds will not be provided in cases including but not limited to:
                            </p>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Customer no-show</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Incorrect information provided by the customer</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Visa rejection</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold mt-1">•</span>
                                    <span>Government restrictions, immigration decisions, or force majeure events</span>
                                </li>
                            </ul>
                        </div>

                        {/* Section 10 */}
                        <div className="p-6 bg-card border border-border rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">10. Policy Changes</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                Mumo Travels & Tours reserves the right to modify or update this Refund Policy at any time without prior
                                notice. Changes will be effective immediately upon posting on our website.
                            </p>
                        </div>

                        {/* Section 11 - Contact Information */}
                        <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                            <p className="mb-4 text-foreground/80 font-semibold">For refund-related inquiries, please contact:</p>
                            <div className="space-y-2 text-foreground/80">
                                <p className="font-bold">Mumo Travels & Tours</p>
                                <p>
                                    <span className="font-semibold">Website:</span>{" "}
                                    <a href="https://www.mumotravels.com" className="text-primary hover:underline">
                                        www.mumotravels.com
                                    </a>
                                </p>
                                <p>
                                    <span className="font-semibold">Email:</span>{" "}
                                    <a href="mailto:mumotravelsandtours@gmail.com" className="text-primary hover:underline">
                                        mumotravelsandtours@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <span className="font-semibold">WhatsApp:</span>{" "}
                                    <a href="https://wa.me/01332846700" className="text-primary hover:underline">
                                        +8801332846700
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}