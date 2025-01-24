import DashboardCardsComponent from "../components/dashboard/DashboardCardsComponent.tsx";
import DashboardImageSlider from "../components/dashboard/DashboardImageSlider.tsx";

function DashboardPage() {
    return (
        <>
            <div className="mx-5">
                <DashboardCardsComponent />
                <DashboardImageSlider />
            </div>
        </>
    )
}

export default DashboardPage;
