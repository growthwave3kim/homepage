"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ContactFormData } from "@/types";
import { COMPANY_INFO } from "@/data/navigation";

const BUDGET_OPTIONS = [
  "100만원 미만",
  "100만원 ~ 300만원",
  "300만원 ~ 500만원",
  "500만원 ~ 1,000만원",
  "1,000만원 이상",
  "미정",
];

const SERVICE_OPTIONS = [
  "콘텐츠 마케팅",
  "소셜 미디어",
  "인플루언서 마케팅",
  "웹사이트 제작",
  "퍼포먼스 광고",
  "통합 브랜딩",
  "기타",
];

const REFERRAL_OPTIONS = [
  "네이버 검색",
  "인스타그램",
  "지인 소개",
  "블로그 / 콘텐츠",
  "기타",
];

const CONTACT_DETAILS = [
  { icon: Phone, label: COMPANY_INFO.phone },
  { icon: Mail, label: COMPANY_INFO.email },
  { icon: MapPin, label: COMPANY_INFO.address },
  { icon: Clock, label: COMPANY_INFO.hours },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    company: "",
    name: "",
    phone: "",
    budget: "",
    service: "",
    referral: "",
    message: "",
    privacyAgreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    setIsSubmitting(true);
    // TODO: Supabase에 저장
    await new Promise((r) => setTimeout(r, 1000));
    alert("상담 문의가 접수되었습니다. 빠르게 연락드리겠습니다.");
    setFormData({
      company: "",
      name: "",
      phone: "",
      budget: "",
      service: "",
      referral: "",
      message: "",
      privacyAgreed: false,
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-2">
            <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Contact
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
              프로젝트를
              <br />
              시작해볼까요?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              브랜드에 대해 알려주세요.
              <br />
              맞춤 전략과 견적을 빠르게 안내드리겠습니다.
            </p>

            <div className="space-y-5">
              {CONTACT_DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border bg-card p-6 sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: 회사명 · 성함 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="company">회사명</Label>
                    <Input
                      id="company"
                      placeholder="회사명을 입력해주세요"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="name">성함</Label>
                    <Input
                      id="name"
                      placeholder="담당자 성함을 입력해주세요"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                {/* Row 2: 연락처 · 예산대 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">연락처</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="budget">예산대</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          budget: value ?? "",
                        }))
                      }
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="예산을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3: 희망 서비스 · 유입 경로 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="service">희망 서비스</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          service: value ?? "",
                        }))
                      }
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="서비스를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICE_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="referral">유입 경로</Label>
                    <Select
                      value={formData.referral}
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          referral: value ?? "",
                        }))
                      }
                    >
                      <SelectTrigger id="referral">
                        <SelectValue placeholder="유입 경로를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {REFERRAL_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 4: 문의 내용 */}
                <div className="space-y-1.5">
                  <Label htmlFor="message">문의 내용</Label>
                  <Textarea
                    id="message"
                    placeholder="프로젝트에 대해 자유롭게 알려주세요"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAgreed}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        privacyAgreed: checked === true,
                      }))
                    }
                  />
                  <Label
                    htmlFor="privacy"
                    className="text-sm text-muted-foreground"
                  >
                    개인정보 수집 및 이용에 동의합니다.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "접수 중..." : "프로젝트 문의하기"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
