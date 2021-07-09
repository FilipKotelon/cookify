using Microsoft.EntityFrameworkCore.Migrations;

namespace Cookify.DataAccess.Migrations
{
    public partial class RecipesAndCategories4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 6,
                column: "Title",
                value: "Koktajle");

            migrationBuilder.UpdateData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 9,
                column: "Title",
                value: "Sałatki");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 6,
                column: "Title",
                value: "Koktaile");

            migrationBuilder.UpdateData(
                table: "RecipeCategory",
                keyColumn: "Id",
                keyValue: 9,
                column: "Title",
                value: "Saładki");
        }
    }
}
