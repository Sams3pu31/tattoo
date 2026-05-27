import { CalendarDays, ShieldCheck, Sparkles } from 'lucide-react';
import InfoCard from './InfoCard.jsx';

export default function ProcessSection() {
    return (
        <section
            id="process"
            className="mx-auto grid max-w-7xl gap-5 px-5 py-24 sm:px-8 md:grid-cols-3 lg:px-12">
            <InfoCard
                icon={CalendarDays}
                title="1. Заявка"
                text="Коротко описываем идею, место на теле, размер и настроение. После этого мастер предлагает направление и ближайшие даты."
            />
            <InfoCard
                icon={Sparkles}
                title="2. Эскиз"
                text="Эскиз создаётся под анатомию, а не просто переносится с картинки. Можно собрать референсы, но финал будет авторским."
            />
            <InfoCard
                icon={ShieldCheck}
                title="3. Сеанс"
                text="Стерильные расходники, спокойный темп, понятные рекомендации по заживлению и поддержка после сеанса."
            />
        </section>
    );
}
