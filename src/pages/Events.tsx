import { Users, Utensils, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventsProps {
  onNavigate: (page: string) => void;
}

export default function Events({ onNavigate }: EventsProps) {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">Catering & Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to large corporate events, we bring authentic Mediterranean flavors to your special occasions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-[#B43F3F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-2xl text-primary mb-3">Corporate Events</h3>
            <p className="text-gray-600">Professional catering services for meetings, conferences, and corporate gatherings.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-[#B43F3F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-2xl text-primary mb-3">Private Parties</h3>
            <p className="text-gray-600">Make your celebrations memorable with our custom menu options and attentive service.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-[#B43F3F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-2xl text-primary mb-3">Wedding Catering</h3>
            <p className="text-gray-600">Create unforgettable moments with our exquisite Mediterranean wedding menus.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-[#B43F3F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-2xl text-primary mb-3">Custom Menus</h3>
            <p className="text-gray-600">Tailored menu options to suit your dietary requirements and preferences.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12">
          <h2 className="font-heading text-4xl text-primary mb-8 text-center">Why Choose Our Catering?</h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#B43F3F] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Fresh, Quality Ingredients</h3>
                <p className="text-gray-600">We source the finest Mediterranean ingredients to ensure authentic flavors in every dish.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#B43F3F] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Flexible Menu Options</h3>
                <p className="text-gray-600">From buffet-style to plated service, we adapt to your event's needs and preferences.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#B43F3F] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Professional Service</h3>
                <p className="text-gray-600">Our experienced team ensures seamless execution from setup to cleanup.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#B43F3F] rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Quality catering that fits your budget, with transparent pricing and no hidden fees.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-heading text-2xl text-primary mb-4">Ready to Plan Your Event?</h3>
            <p className="text-gray-600 mb-6">Contact us today to discuss your catering needs and receive a custom quote.</p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-[#B43F3F] hover:bg-[#932F2F] text-white text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
