export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      chapters: {
        Row: {
          created_at: string
          id: string
          is_exam: boolean
          level: Database["public"]["Enums"]["cefr_level"]
          n: number
          slug: string
          sort: number
          title_de: string
          title_pt: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_exam?: boolean
          level: Database["public"]["Enums"]["cefr_level"]
          n: number
          slug: string
          sort?: number
          title_de: string
          title_pt: string
        }
        Update: {
          created_at?: string
          id?: string
          is_exam?: boolean
          level?: Database["public"]["Enums"]["cefr_level"]
          n?: number
          slug?: string
          sort?: number
          title_de?: string
          title_pt?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          created_at: string
          id: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          parts?: Json
          role?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "chat_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_threads: {
        Row: {
          created_at: string
          id: string
          level: Database["public"]["Enums"]["cefr_level"]
          mode: Database["public"]["Enums"]["chat_mode"]
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          level?: Database["public"]["Enums"]["cefr_level"]
          mode: Database["public"]["Enums"]["chat_mode"]
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          level?: Database["public"]["Enums"]["cefr_level"]
          mode?: Database["public"]["Enums"]["chat_mode"]
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      exercises: {
        Row: {
          created_at: string
          id: string
          lesson_slug: string
          payload: Json
          sort: number
          type: string
        }
        Insert: {
          created_at?: string
          id?: string
          lesson_slug: string
          payload: Json
          sort?: number
          type: string
        }
        Update: {
          created_at?: string
          id?: string
          lesson_slug?: string
          payload?: Json
          sort?: number
          type?: string
        }
        Relationships: []
      }
      flashcards: {
        Row: {
          back: string
          chapter_n: number | null
          created_at: string
          ex_de: string | null
          ex_pt: string | null
          front: string
          id: string
          level: Database["public"]["Enums"]["cefr_level"]
          slug: string
          theme: string | null
        }
        Insert: {
          back: string
          chapter_n?: number | null
          created_at?: string
          ex_de?: string | null
          ex_pt?: string | null
          front: string
          id?: string
          level: Database["public"]["Enums"]["cefr_level"]
          slug: string
          theme?: string | null
        }
        Update: {
          back?: string
          chapter_n?: number | null
          created_at?: string
          ex_de?: string | null
          ex_pt?: string | null
          front?: string
          id?: string
          level?: Database["public"]["Enums"]["cefr_level"]
          slug?: string
          theme?: string | null
        }
        Relationships: []
      }
      lessons: {
        Row: {
          chapter_id: string
          content: string | null
          created_at: string
          examples: Json
          id: string
          notes: Json
          rule: string | null
          slug: string
          sort: number
          title_de: string
          title_pt: string
          vocab: Json
        }
        Insert: {
          chapter_id: string
          content?: string | null
          created_at?: string
          examples?: Json
          id?: string
          notes?: Json
          rule?: string | null
          slug: string
          sort?: number
          title_de: string
          title_pt: string
          vocab?: Json
        }
        Update: {
          chapter_id?: string
          content?: string | null
          created_at?: string
          examples?: Json
          id?: string
          notes?: Json
          rule?: string | null
          slug?: string
          sort?: number
          title_de?: string
          title_pt?: string
          vocab?: Json
        }
        Relationships: [
          {
            foreignKeyName: "lessons_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          current_cefr: Database["public"]["Enums"]["cefr_level"]
          display_name: string | null
          id: string
          last_active_at: string | null
          level: number
          streak_days: number
          updated_at: string
          xp_total: number
        }
        Insert: {
          created_at?: string
          current_cefr?: Database["public"]["Enums"]["cefr_level"]
          display_name?: string | null
          id: string
          last_active_at?: string | null
          level?: number
          streak_days?: number
          updated_at?: string
          xp_total?: number
        }
        Update: {
          created_at?: string
          current_cefr?: Database["public"]["Enums"]["cefr_level"]
          display_name?: string | null
          id?: string
          last_active_at?: string | null
          level?: number
          streak_days?: number
          updated_at?: string
          xp_total?: number
        }
        Relationships: []
      }
      tts_cache: {
        Row: {
          audio: string
          bytes: number
          created_at: string
          text_hash: string
          voice_id: string
        }
        Insert: {
          audio: string
          bytes: number
          created_at?: string
          text_hash: string
          voice_id: string
        }
        Update: {
          audio?: string
          bytes?: number
          created_at?: string
          text_hash?: string
          voice_id?: string
        }
        Relationships: []
      }
      user_lesson_progress: {
        Row: {
          completed_at: string
          id: string
          lesson_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          lesson_id: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          lesson_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_vocab_srs: {
        Row: {
          due_at: string
          ease: number
          flashcard_id: string
          id: string
          interval_days: number
          lapses: number
          reps: number
          state: Database["public"]["Enums"]["srs_state"]
          streak: number
          updated_at: string
          user_id: string
        }
        Insert: {
          due_at?: string
          ease?: number
          flashcard_id: string
          id?: string
          interval_days?: number
          lapses?: number
          reps?: number
          state?: Database["public"]["Enums"]["srs_state"]
          streak?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          due_at?: string
          ease?: number
          flashcard_id?: string
          id?: string
          interval_days?: number
          lapses?: number
          reps?: number
          state?: Database["public"]["Enums"]["srs_state"]
          streak?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_vocab_srs_flashcard_id_fkey"
            columns: ["flashcard_id"]
            isOneToOne: false
            referencedRelation: "flashcards"
            referencedColumns: ["id"]
          },
        ]
      }
      xp_events: {
        Row: {
          created_at: string
          id: string
          ref_id: string
          source: string
          user_id: string
          xp: number
        }
        Insert: {
          created_at?: string
          id?: string
          ref_id: string
          source: string
          user_id: string
          xp: number
        }
        Update: {
          created_at?: string
          id?: string
          ref_id?: string
          source?: string
          user_id?: string
          xp?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "student"
      cefr_level: "A1" | "A2" | "B1" | "B2" | "C1"
      chat_mode: "tutor" | "examiner"
      srs_state: "new" | "learning" | "review" | "mastered"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "student"],
      cefr_level: ["A1", "A2", "B1", "B2", "C1"],
      chat_mode: ["tutor", "examiner"],
      srs_state: ["new", "learning", "review", "mastered"],
    },
  },
} as const
