import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const services = [
    'Hair Transplant Consultation',
    'PRP Therapy',
    'Pixelite 2.0',
    'Microneedling',
    'Carbon Laser Peel',
    'Facial Treatments',
    'Other',
];

const centers = [
    'pune',
    'Ahmedabad',
    'Bangalore',
    'Hyderabad',
    'Dubai',
];

const hairServices = ['Hair Transplant Consultation', 'PRP Therapy'];
const skinServices = ['Pixelite 2.0', 'Microneedling', 'Carbon Laser Peel', 'Facial Treatments'];

const ratingGrades = [2, 3, 4, 5, 6, 7];

// SVG head icons for baldness grades
const BaldnessIcon = ({ grade, selected }: { grade: number; selected: boolean }) => {
    const hairColors: Record<number, string> = {
        2: '#8B4513',
        3: '#8B4513',
        4: '#A0522D',
        5: '#CD853F',
        6: '#DEB887',
        7: '#F5DEB3',
    };

    const hairPaths: Record<number, string> = {
        2: 'M10,8 Q16,2 22,8 L22,12 Q16,8 10,12 Z',
        3: 'M11,8 Q16,3 21,8 L21,11 Q16,8 11,11 Z',
        4: 'M12,9 Q16,5 20,9 L20,11 Q16,9 12,11 Z',
        5: 'M13,10 Q16,7 19,10 L19,11 Q16,10 13,11 Z',
        6: 'M14,10 Q16,8 18,10 L18,11 Q16,10 14,11 Z',
        7: 'M15,11 Q16,10 17,11 Z',
    };

    return (
        <svg width="24" height="28" viewBox="0 0 32 36" className="inline-block">
            <ellipse cx="16" cy="18" rx="10" ry="12" fill="#F5CBA7" stroke="#D4A574" strokeWidth="1" />
            <path d={hairPaths[grade]} fill={hairColors[grade]} />
            <ellipse cx="6" cy="18" rx="2" ry="3" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.5" />
            <ellipse cx="26" cy="18" rx="2" ry="3" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.5" />
        </svg>
    );
};

// Face icons for skin condition grades (2-7 scale)
const SkinConditionIcon = ({ grade, selected }: { grade: number; selected: boolean }) => {
    const skinColors: Record<number, string> = {
        2: '#FF6B6B',
        3: '#FFA94D',
        4: '#FFD93D',
        5: '#A8E6CF',
        6: '#6BCB77',
        7: '#4CAF50',
    };

    const dotPatterns: Record<number, number> = {
        2: 12,
        3: 9,
        4: 6,
        5: 4,
        6: 2,
        7: 0,
    };

    return (
        <svg width="24" height="28" viewBox="0 0 32 36" className="inline-block">
            <ellipse cx="16" cy="18" rx="10" ry="12" fill="#F5CBA7" stroke="#D4A574" strokeWidth="1" />
            {Array.from({ length: dotPatterns[grade] || 0 }).map((_, i) => (
                <circle
                    key={i}
                    cx={10 + (i % 4) * 4}
                    cy={14 + Math.floor(i / 4) * 4}
                    r="1.5"
                    fill={skinColors[grade]}
                />
            ))}
            <circle cx="12" cy="16" r="1" fill="#333" />
            <circle cx="20" cy="16" r="1" fill="#333" />
            <path
                d={grade >= 5 ? "M13,24 Q16,27 19,24" : "M13,25 Q16,23 19,25"}
                fill="none"
                stroke="#333"
                strokeWidth="1"
            />
        </svg>
    );
};

// Star icons for general rating (2-7 scale)
const StarIcon = ({ grade, selected, currentSelection }: { grade: number; selected: boolean; currentSelection: number }) => {
    const isFilled = currentSelection > 0 && grade <= currentSelection;
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" className="inline-block">
            <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={isFilled ? '#FFD700' : '#E0E0E0'}
                stroke={isFilled ? '#DAA520' : '#BDBDBD'}
                strokeWidth="1"
            />
        </svg>
    );
};

export const BookingModal = () => {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        service: '',
        center: '',
        baldnessGrade: 0,
    });

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');

        // Show welcome toast for first-time visitors
        if (!hasVisited) {
            localStorage.setItem('hasVisited', 'true');
            toast('Welcome to Elevate Rootz! 🌿', {
                description: 'Established in 2016 | Premium Hair Transplant & Skin Care | 9+ Years of Excellence | 6000+ Happy Patients | State-of-the-art facilities in India & Dubai',
                duration: 8000,
            });
        }

        // Show modal every 20 seconds
        const interval = setInterval(() => {
            setShowBookingModal(true);
        }, 20000);

        // Show initial modal after 3 seconds for returning visitors
        const initialTimeout = setTimeout(() => {
            if (hasVisited) {
                setShowBookingModal(true);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(initialTimeout);
        };
    }, []);

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.email) {
            toast.error('Please fill in all required fields');
            return;
        }
        toast.success('Appointment request submitted!', {
            description: 'We will contact you shortly.',
        });
        setShowBookingModal(false);
        setFormData({
            name: '',
            phone: '',
            email: '',
            age: '',
            service: '',
            center: '',
            baldnessGrade: 0,
        });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            age: '',
            service: '',
            center: '',
            baldnessGrade: 0,
        });
    };

    return (
        <Dialog open={showBookingModal} onOpenChange={(open) => {
            setShowBookingModal(open);
            if (!open) {
                resetForm();
            }
        }}>
            <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-4">
                    Book Your Appointment
                </h2>

                <div className="space-y-4 pb-2">
                    <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-gray-300"
                    />

                    <Input
                        placeholder="Your Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-gray-300"
                    />

                    <Input
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-gray-300"
                    />

                    <Input
                        placeholder="Enter Your Age (It should be 24 to 50)"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="h-12 border-gray-300"
                    />

                    <Select
                        value={formData.service || undefined}
                        onValueChange={(value) => setFormData({ ...formData, service: value, baldnessGrade: 0 })}
                    >
                        <SelectTrigger className="h-12 border-gray-300">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent position="popper" side="top">
                            {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                    {service}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select
                        value={formData.center || undefined}
                        onValueChange={(value) => setFormData({ ...formData, center: value })}
                    >
                        <SelectTrigger className="h-12 border-gray-300">
                            <SelectValue placeholder="Select Nearest Center" />
                        </SelectTrigger>
                        <SelectContent position="popper" side="top">
                            {centers.map((center) => (
                                <SelectItem key={center} value={center}>
                                    {center}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Conditional Rating Selection based on Service */}
                    {formData.service && (
                        <div className="pt-2">
                            {/* Hair Services - Baldness Grade */}
                            {hairServices.includes(formData.service) && (
                                <>
                                    <p className="text-center font-medium text-foreground text-sm mb-2">
                                        Grade of Baldness<span className="text-destructive">*</span> :
                                    </p>
                                    <div className="flex justify-center items-center gap-1">
                                        {ratingGrades.map((grade) => (
                                            <label
                                                key={grade}
                                                className="flex flex-col items-center cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="ratingGrade"
                                                    value={grade}
                                                    checked={formData.baldnessGrade === grade}
                                                    onChange={() => setFormData({ ...formData, baldnessGrade: grade })}
                                                    className="sr-only"
                                                />
                                                <div className={`flex items-center gap-0.5 p-0.5 rounded-lg transition-all ${formData.baldnessGrade === grade
                                                    ? 'bg-primary/10 ring-2 ring-primary'
                                                    : 'hover:bg-muted'
                                                    }`}>
                                                    <span className={`text-sm font-bold ${formData.baldnessGrade === grade ? 'text-primary' : 'text-foreground'
                                                        }`}>{grade}</span>
                                                    <BaldnessIcon grade={grade} selected={formData.baldnessGrade === grade} />
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Skin Services - Skin Condition Grade */}
                            {skinServices.includes(formData.service) && (
                                <>
                                    <p className="text-center font-medium text-foreground text-sm mb-2">
                                        Skin Condition Level<span className="text-destructive">*</span> :
                                    </p>
                                    <div className="flex justify-center items-center gap-1">
                                        {ratingGrades.map((grade) => (
                                            <label
                                                key={grade}
                                                className="flex flex-col items-center cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="ratingGrade"
                                                    value={grade}
                                                    checked={formData.baldnessGrade === grade}
                                                    onChange={() => setFormData({ ...formData, baldnessGrade: grade })}
                                                    className="sr-only"
                                                />
                                                <div className={`flex items-center gap-0.5 p-0.5 rounded-lg transition-all ${formData.baldnessGrade === grade
                                                    ? 'bg-primary/10 ring-2 ring-primary'
                                                    : 'hover:bg-muted'
                                                    }`}>
                                                    <span className={`text-sm font-bold ${formData.baldnessGrade === grade ? 'text-primary' : 'text-foreground'
                                                        }`}>{grade}</span>
                                                    <SkinConditionIcon grade={grade} selected={formData.baldnessGrade === grade} />
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Other Services - Star Rating */}
                            {formData.service === 'Other' && (
                                <>
                                    <p className="text-center font-medium text-foreground text-sm mb-2">
                                        Urgency Level<span className="text-destructive">*</span> :
                                    </p>
                                    <div className="flex justify-center items-center gap-1">
                                        {ratingGrades.map((grade) => (
                                            <label
                                                key={grade}
                                                className="flex flex-col items-center cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="ratingGrade"
                                                    value={grade}
                                                    checked={formData.baldnessGrade === grade}
                                                    onChange={() => setFormData({ ...formData, baldnessGrade: grade })}
                                                    className="sr-only"
                                                />
                                                <div className={`p-0.5 rounded-lg transition-all ${formData.baldnessGrade === grade
                                                    ? 'bg-primary/10 ring-2 ring-primary'
                                                    : 'hover:bg-muted'
                                                    }`}>
                                                    <span className="text-sm font-bold mr-0.5">{grade}</span>
                                                    <StarIcon grade={grade} selected={formData.baldnessGrade === grade} currentSelection={formData.baldnessGrade} />
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <Button
                        className="w-full h-12 text-lg font-bold bg-[#8B9A3D] hover:bg-[#7A8935] text-white mt-4"
                        onClick={handleSubmit}
                    >
                        AVAIL OFFER
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
