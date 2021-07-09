using Microsoft.EntityFrameworkCore.Migrations;

namespace Cookify.DataAccess.Migrations
{
    public partial class RecipesAndCategories2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Recipe",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80");
        }
    }
}
